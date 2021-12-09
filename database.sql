CREATE DATABASE IF NOT EXISTS challenge;

CREATE TABLE user (
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE project (
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  userId INT(11) UNSIGNED NOT NULL,
  name VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL DEFAULT 0,
  createdAt DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES user(id)
) ENGINE=InnoDB;

INSERT INTO user(name, email) VALUES
('Aline Torres', 'alinet@email.com'),
('Mateus Santos', 'mateuss@email.com'),
('Jacson Souza', 'jacsons@email.com'),
('Leonardo Silva', 'leonardos@email.com'),
('Roberto Ramos', 'robertor@email.com'),
('Bruno Vargas', 'bruno@email.com'),
('Felipe Fortes', 'felipef@email.com'),
('Fernando Ferreira', 'fernandof@email.com'),
('Jesica Ribeiro', 'jesicar@email.com');

INSERT INTO project(userId, name, price) VALUES
(1, 'MVP sistema financeiro.', 142.13),
(2, 'MVP sistema faturamento.', 242.13),
(3, 'Sistema de controle de estoque.', 342.13),
(4, 'Sistema para emissão de notas fiscais de serviço.', 442.13),
(4, 'Sistema para emissão de notas fiscais de serviço.', 442.13),
(4, 'Rastreador de Encomendas', 442.13),
(4, 'Sistema service desk.', 442.13),
(4, 'Sistema de auditoria contábil', 442.13),
(5, 'Sistema para recursos humanos.', 542.13),
(6, 'Sistema armazenador de arquivos.', 642.13),
(6, 'Sistema armazenador de arquivos.', 642.13),
(7, 'Sistema de chat.', 742.13),
(8, 'Sistema para agendamento de consultas médicas.', 842.13),
(9, 'Sistema para integração com eSocial SST', 942.13);
