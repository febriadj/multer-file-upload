-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2020 at 11:30 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `multer_uploads`
--

CREATE TABLE `multer_uploads` (
  `id` int(11) NOT NULL,
  `img` varchar(225) DEFAULT NULL,
  `deskripsi` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `multer_uploads`
--

INSERT INTO `multer_uploads` (`id`, `img`, `deskripsi`) VALUES
(4, 'img-1609064281868.jpg', 'Gambar Pertama'),
(5, 'img-1609064513602.jpg', 'Gambar Kedua'),
(6, 'img-1609064633400.jpg', 'Gambar Ketiga'),
(7, 'img-1609064649555.jpg', 'Gambar Keempat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `multer_uploads`
--
ALTER TABLE `multer_uploads`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `multer_uploads`
--
ALTER TABLE `multer_uploads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
