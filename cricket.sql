-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 10, 2021 at 06:59 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cricket`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `connection` text COLLATE utf8_unicode_ci NOT NULL,
  `queue` text COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
CREATE TABLE IF NOT EXISTS `matches` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `team_one_id` bigint UNSIGNED NOT NULL,
  `oppenent_team` bigint UNSIGNED NOT NULL,
  `remark` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `matches_team_one_id_foreign` (`team_one_id`),
  KEY `matches_oppenent_team_foreign` (`oppenent_team`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`id`, `date`, `team_one_id`, `oppenent_team`, `remark`, `created_at`, `updated_at`) VALUES
(1, '2021-08-15', 1, 2, NULL, '2021-08-02 10:24:31', '2021-08-02 10:24:31');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2014_10_12_000000_create_users_table', 1),
(6, '2014_10_12_100000_create_password_resets_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2021_08_01_082523_create_teams_table', 1),
(10, '2021_08_02_094230_create_players_table', 2),
(11, '2021_08_02_123455_create_matches_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
CREATE TABLE IF NOT EXISTS `players` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dob` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `batting_style` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `team_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `players_team_id_foreign` (`team_id`),
  KEY `players_name_index` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `dob`, `url`, `country`, `batting_style`, `remark`, `team_id`, `created_at`, `updated_at`) VALUES
(1, 'Sinthu569', '2021-08-12', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2Fsinthu.jpeg?alt=media&token=9e718e6f-47e5-44d5-b8b5-66cc0550216b', NULL, NULL, NULL, 1, '2021-08-02 07:08:10', '2021-08-02 08:48:25'),
(2, 'Testdfdere', NULL, 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2Fsinthu.jpeg?alt=media&token=0938af7b-1ca7-4f1c-bb30-beb848c43d95', NULL, NULL, NULL, 1, '2021-08-02 07:08:19', '2021-08-02 07:08:19'),
(3, 'Sinthu', NULL, 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2Fsinthu.jpeg?alt=media&token=0938af7b-1ca7-4f1c-bb30-beb848c43d95', NULL, NULL, NULL, 1, '2021-08-02 07:08:38', '2021-08-02 07:08:38'),
(4, 'Nowsad', NULL, 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2FNowsad.jpeg?alt=media&token=e2207226-71b4-44ee-b014-0cccb2b4a69d', NULL, NULL, NULL, 1, '2021-08-02 07:15:04', '2021-08-02 07:15:04'),
(5, 'dredre', NULL, NULL, NULL, NULL, NULL, 1, '2021-08-02 07:17:36', '2021-08-02 07:17:36'),
(6, 'kjdirkedike', NULL, NULL, NULL, NULL, NULL, 1, '2021-08-02 07:19:48', '2021-08-02 07:19:48'),
(7, 'Seelan', '2021-08-24', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2Fseelan.jpeg?alt=media&token=535f0594-76d0-4241-85f8-d8a2f399cbcd', NULL, NULL, NULL, 1, '2021-08-02 07:26:24', '2021-08-02 07:26:24'),
(8, 'Irshath', '1970-08-03', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2F16278998768941984737814305189027.jpg?alt=media&token=969689bf-231b-436a-bac3-024607f81fde', NULL, NULL, NULL, 1, '2021-08-02 07:28:23', '2021-08-02 07:28:23'),
(9, 'Faiz', '2021-08-19', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2Fvinoth.jpeg?alt=media&token=17dc1391-2919-433a-8d83-cbf945210bc9', NULL, NULL, NULL, 1, '2021-08-02 07:35:27', '2021-08-02 07:35:27'),
(10, 'Fasmirr', '1986-08-11', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2Ffasmir.jpeg?alt=media&token=a347763d-64a1-41ca-9188-8a17fa4d5f9e', NULL, NULL, NULL, 1, '2021-08-02 09:07:28', '2021-08-02 09:07:36'),
(11, 'Testdfdere56', '1985-08-25', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/players%2Fatharith.jpeg?alt=media&token=16069596-cad2-41f2-841b-1f0ae787a1e9', NULL, NULL, NULL, 1, '2021-08-02 09:11:26', '2021-08-02 09:11:26');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
CREATE TABLE IF NOT EXISTS `teams` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teams_name_index` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `thumbnail`, `created_at`, `updated_at`) VALUES
(1, 'Lions CC', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/teams%2Fmuaither%20super%20kings.jpeg?alt=media&token=796be6b1-60c8-44d6-9625-691b3a7a6d75', '2021-08-02 04:56:22', '2021-08-02 04:56:22'),
(2, 'Mass Warrios CC', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/teams%2Fmasswarriors.jpeg?alt=media&token=b7518a56-e2d3-4956-a178-62d389807a10', '2021-08-02 04:56:51', '2021-08-02 04:56:51'),
(3, 'Fast Elevent CC', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/teams%2Fteam1.jpeg?alt=media&token=34384311-da66-4ca4-b700-68bc80b05dc9', '2021-08-02 04:57:52', '2021-08-02 04:57:52'),
(4, 'Welcome', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/teams%2F16278912847774075037096811897101.jpg?alt=media&token=99a5141e-b128-4448-bb3b-6d8720a2c249', '2021-08-02 05:04:56', '2021-08-02 05:04:56'),
(5, 'pottuvil343', 'https://firebasestorage.googleapis.com/v0/b/react-cricket-2d5db.appspot.com/o/teams%2Fmasswarriors.jpeg?alt=media&token=b2a7c733-eb1a-45e2-b363-1014bf3d0ad8', '2021-08-02 05:08:18', '2021-08-02 05:08:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
