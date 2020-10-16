Migration table created successfully.
CreateUsersTable: create table `users` (`id` bigint unsigned not null auto_increment primary key, `email` varchar(255) not null, `password` varchar(255) not null, `stack` decimal(15, 2) not null default '100', `roles` int not null default '1', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate 'utf8mb4_unicode_ci'
CreateUsersTable: alter table `users` add unique `users_email_unique`(`email`)
CreateGameTable: create table `games` (`id` bigint unsigned not null auto_increment primary key, `thuis` varchar(255) not null, `uit` varchar(255) not null, `tijd` timestamp not null, `win` decimal(4, 2) not null, `gelijk` decimal(4, 2) not null, `verlies` decimal(4, 2) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate 'utf8mb4_unicode_ci'
CreateBidTable: create table `bids` (`id` bigint unsigned not null auto_increment primary key, `bidType` varchar(255) not null, `bid` decimal(15, 2) not null, `user_id` bigint unsigned not null, `game_id` bigint unsigned not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate 'utf8mb4_unicode_ci'
CreateBidTable: alter table `bids` add constraint `bids_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on delete cascade
CreateBidTable: alter table `bids` add constraint `bids_game_id_foreign` foreign key (`game_id`) references `games` (`id`) on delete cascade
CreateBidTable: alter table `bids` add index `bids_user_id_index`(`user_id`)
CreateBidTable: alter table `bids` add index `bids_game_id_index`(`game_id`)
