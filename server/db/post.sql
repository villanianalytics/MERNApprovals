-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2023 at 05:34 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `post`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `post` varchar(5550) NOT NULL,
  `hashtags` varchar(255) NOT NULL,
  `comments` varchar(2550) NOT NULL,
  `notes` varchar(2550) NOT NULL,
  `company` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `schedule` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `post`, `hashtags`, `comments`, `notes`, `company`, `client`, `state`, `schedule`) VALUES
(1, 'MyPost101', 'This is sample post content. Ah', 'Assigned', 'Doon''t know', 'This is for notes.', 'Villytics', 'Daniel Villani', 'Published', '2023-06-15'),
(2, 'HappyPosting', '', '', '', '', 'ABC', 'John Doe', 'Approved', ''),
(3, 'MyPost201', '', '', 'This is not good post.', '', 'ABC', 'John Doe', 'Approved', ''),
(6, 'Test', 'AAAAAAAA', '', '', '', 'Test', 'Test', 'Published', '2023-06-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
