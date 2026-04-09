-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: crud
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `skins`
--

DROP TABLE IF EXISTS `skins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skins` (
  `idskins` int NOT NULL AUTO_INCREMENT,
  `nomeSkin` varchar(100) NOT NULL,
  `arma` varchar(45) NOT NULL,
  `raridade` varchar(45) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `colecao` varchar(45) NOT NULL,
  PRIMARY KEY (`idskins`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skins`
--

LOCK TABLES `skins` WRITE;
/*!40000 ALTER TABLE `skins` DISABLE KEYS */;
INSERT INTO `skins` VALUES (1,'Fuel Injector','AK-47','Covert',973.64,'The Wildfire Collection'),(2,'Bloodsport','AK-47','Covert',1054.83,'The Spectrum Collection'),(3,'The Empress','AK-47','Covert',712.43,'The Spectrum 2 Collection'),(4,'Golden Coil','M4A1-S','Covert',418.68,'The Shadow Collection'),(5,'The Emperor','M4A4','Covert',415.74,'The Prisma Collection'),(6,'Hyper Beast','AWP','Covert',271.68,'The Falchion Collection'),(7,'Rose Iron','MP9 ','Restricted',74.38,'The Winter Offensive Collection'),(8,'Disco Tech','MAC-10','Classified',40.48,'The Prisma 2 Collection'),(9,'Water Elemental','Glock-18','Classified',141.45,'The Breakout Collection'),(10,'The Traitor','USP-S','Covert',273.84,'The Snakebite Collection'),(11,'Code Red','Desert Eagle','Covert',314.12,'The Horizon Collection'),(12,'Omega','Gloves','Extraordinary',1877.52,'The Sport Gloves Collection'),(13,'Tiger Tooth','Butterfly Knife','Covert',9545.69,'The Breakout Collection');
/*!40000 ALTER TABLE `skins` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09  0:39:16
