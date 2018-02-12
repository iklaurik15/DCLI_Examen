-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2018 a las 12:24:44
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `zornotzaikastetxea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ikasleak`
--

CREATE TABLE IF NOT EXISTS `ikasleak` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido1` text NOT NULL,
  `apellido2` text NOT NULL,
  `ciclo` text NOT NULL,
  `curso` text NOT NULL,
  `seleccionada` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ikasleak`
--

INSERT INTO `ikasleak` (`id`, `nombre`, `apellido1`, `apellido2`, `ciclo`, `curso`, `seleccionada`) VALUES
(2, 'Mikel', 'Porras', 'gil', 'Soldadura', 'segundo', 'false'),
(6, 'Ander', 'Enbeita', 'Gojenola', 'Soldadura', 'segundo', 'false'),
(7, 'Karmele', 'Arana', 'Goitia', 'Soldadura', 'primero', 'false'),
(8, 'Koldo', 'Beitia', 'Markes', 'Desarrollo Aplic. Web', 'segundo', 'false'),
(9, 'Lexuri', 'Arana', 'Markes', 'Cuidados Aux Enfermeria', 'primero', 'false'),
(11, 'Txabi', 'Gotia', 'Mendia', 'Soldadura', 'primero', 'false'),
(12, 'Eneko', 'Atxaga', 'Gil', 'Desarrollo Aplic. Web', 'primero', 'false'),
(13, 'Ana', 'Beitia', 'Gil', 'Soldadura', 'primero', 'false'),
(14, 'Olatz', 'Gil', 'Gil', 'Desarrollo Aplic. Web', 'segundo', 'false'),
(15, 'Elene', 'Abaroa', 'Abaroa', 'Desarrollo Aplic. Web', 'segundo', 'false'),
(19, 'IÃ±igo', 'Alvarez', 'Lauzirika', 'Desarrollo Aplic. Web', 'segundo', 'false'),
(20, 'Txema', 'Arana', 'Aboitiz', 'Soldadura', 'primero', 'false'),
(21, 'Jon Ander', 'Mendizabal', 'Atutxa', 'Cuidados Aux Enfermeria', 'segundo', 'false'),
(22, 'Unai', 'Zarate', 'Garatea', 'Soldadura', 'primero', 'false');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolak`
--

CREATE TABLE IF NOT EXISTS `rolak` (
  `usuario` text NOT NULL,
  `contrasena` text NOT NULL,
  `rolmota` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rolak`
--

INSERT INTO `rolak` (`usuario`, `contrasena`, `rolmota`) VALUES
('admin', 'admin', 'administrador'),
('user1', 'user1', 'administrador'),
('user2', 'user2', 'lector'),
('user3', 'user3', 'lector');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zikloak`
--

CREATE TABLE IF NOT EXISTS `zikloak` (
  `zikloIzena` text NOT NULL,
  `familia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `zikloak`
--

INSERT INTO `zikloak` (`zikloIzena`, `familia`) VALUES
('Cuidados Aux Enfermeria', 'Sanidad'),
('Soldadura', 'Fabricacion Mecanica'),
('Desarrollo Aplic. Web', 'Informtatica');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
