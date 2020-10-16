<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Games;
use App\Models\Bids;
use App\Models\User;

class GamesController extends Controller
{
    public function store(Request $request) {
        Games::create([
            'thuis' => $request->thuis,
            'uit' => $request->uit,
            'tijd' => $request->tijd,
            'win' => $request->win,
            'gelijk' => $request->gelijk,
            'verlies' => $request->verlies
        ]);

        return [
            'Success'
        ];
    }

    public function all() {
        return DB::table('games')->get();
    }

    public function bid(Request $request) {
        $id = auth()->user()->id;

        // dd(auth()->user()->stack);

        $money = auth()->user()->stack - $request->bid;
        
        if ($money > 0.0) 
        {
            DB::table('users')
                ->where('id', $id)
                ->update(['stack' => $money]);

            Bids::create([
                'bidType' => $request->bidType,
                'bid' => $request->bid,
                'user_id' => $id,
                'game_id' => $request->game,
            ]);
            
            return [
                'success' => 'You just wasted money :)'
            ];

        }
        else {
            return [
                'danger' => 'Not enough stacks buddy :('
            ];
        };
    }

    public function getUserBids() {
        $id = auth()->user()->id;

        return DB::table('bids')
                        ->join('games', 'bids.game_id', '=', 'games.id')
                        ->select('bids.*', 'games.thuis', 'games.uit', 'games.tijd', 'games.win', 'games.gelijk', 'games.verlies')
                        ->get()
                        ->where('user_id', $id);
    }

    public function getStacks() {
        return auth()->user()->stack;
    }

    public function finishGame(Request $request) {
        $bidType = $request->type;
        $gameId = $request->id;
        $test = [];


        $games = DB::table('bids')
                    ->join('games', 'bids.game_id', '=', 'games.id')
                    ->select('bids.*', 'games.win', 'games.gelijk', 'games.verlies')
                    ->get()
                    ->where('bidType', $bidType)
                    ->where('game_id', $gameId);

        foreach ($games as $game) {

            if ($bidType == 0) {
                $totalWin = $game->bid * $game->win;
            } else if ($bidType == 1) {
                $totalWin = $game->bid * $game->gelijk;
            } else if ($bidType == 2) {
                $totalWin = $game->bid * $game->verlies;
            };

            $currentMoney = DB::table('users')
                                ->select('stack')
                                ->where('id', $game->user_id)
                                ->get();
            
            $money = $currentMoney[0]->stack + $totalWin;

            DB::table('users')
            ->where('id', $game->user_id)
            ->update(['stack' => $money]);
        };

        DB::table('games')
            ->where('id', $gameId)
            ->delete();

    }
}
