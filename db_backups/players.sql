-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 09, 2021 at 11:23 AM
-- Server version: 8.0.26-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dob` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `countrvarchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `batting_style` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `team_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `dob`, `url`, `country`, `batting_style`, `remark`, `team_id`, `created_at`, `updated_at`) VALUES
('Mohamed Atharith', '1985-10-22', 'atharith.jpeg', NULL, NULL, NULL, 1, '2021-08-04 06:40:15', '2021-08-04 06:41:13'),
('Siraj', '1985-10-22', 'siraj.jpeg', NULL, NULL, NULL, 1, '2021-08-04 12:44:25', '2021-08-04 12:44:25'),
('Sinthu', '1986-05-12', 'sinthu.jpeg', NULL, NULL, NULL, 1, '2021-08-04 12:47:37', '2021-08-04 12:47:37'),
('Fasmir', '1987-02-15', 'fasmir.jpeg', NULL, NULL, NULL, 1, '2021-08-05 07:14:04', '2021-08-05 07:14:04'),
('Vinoth', '1987-03-05', 'vinoth.jpeg', NULL, NULL, NULL, 1, '2021-08-05 07:15:09', '2021-08-05 07:15:09'),
('Sachine', '1982-05-02', 'sachineAnna.jpeg', NULL, NULL, NULL, 1, '2021-08-05 07:19:16', '2021-08-05 07:19:16'),
('Seelan', '1981-03-02', 'seelan.jpeg', NULL, NULL, NULL, 1, '2021-08-05 07:20:17', '2021-08-05 07:20:17'),
('Nowsad', '1982-03-02', 'Nowsad.jpeg', NULL, NULL, NULL, 1, '2021-08-05 07:21:33', '2021-08-05 07:21:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `players_team_id_foreign` (`team_id`),
  ADD KEY `players_name_index` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `players_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
