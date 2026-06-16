
CREATE DATABASE login_minimalista_bd;

USE login_minimalista_bd;


CREATE TABLE `usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NOT NULL,
  `email` VARCHAR(120) NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
  );

