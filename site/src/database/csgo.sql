create database csgo;
use csgo;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(45),
    email VARCHAR(50),
    senha VARBINARY(150)
);
CREATE TABLE Score (
    idScore INT AUTO_INCREMENT,
    pts INT,
    erros INT,
    temp INT,
    dificuldade char(7) CONSTRAINT CHK_dificuldade CHECK (dificuldade = 'facíl' or dificuldade = 'difícil'  )
    fkUsuario INT,
    PRIMARY KEY (idScore , fkUsuario),
    FOREIGN KEY (fkUsuario)
        REFERENCES Usuario (idUsuario)
);

CREATE TABLE Comentarios (
    idComentario INT AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(250),
    fkUsuario INT,
    PRIMARY KEY (idComentario , fkUsuario),
    FOREIGN KEY (fkUsuario)
        REFERENCES Usuario (idUsuario)
);
-- drop database csgo;


SELECT idComentario, titulo, descricao, fkUsuario, idUsuario, nickname, email FROM Comentarios INNER JOIN usuario ON fkUsuario = idUsuario;
SELECT idComentario, titulo, descricao, fkUsuario, idUsuario, nickname, email FROM Comentarios INNER JOIN usuario ON fkUsuario = idUsuario WHERE descricao LIKE '${texto}';

SELECT 
    *
FROM
    Comentarios;

-- insert into Usuario(nickname,email,senha) values('ADMIN','admin@admin.com',md5('admin'));
insert into Usuario(nickname,email,senha) values('ADMIN','admin@admin.com', aes_encrypt('admin','emterradebiladaquempimbaerei'));

        INSERT INTO Comentarios (texto, fkUsuario) VALUES ('Estou aqui auuuuuuuuuuuuuuuuuu', 1);
        INSERT INTO Comentarios (texto, fkUsuario) VALUES ('Beca esta aqui auuuuuuuuuuuuuuuuuu', 2);
        
        
              SELECT 
         idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE u.id = 2;
        
              SELECT 
         idComentario,
         a.texto,a.fkUsuario, 
         u.idUsuario, u.nickname, u.email,senha
        FROM Comentarios a INNER JOIN usuario u ON a.fkUsuario = u.idUsuario where idUsuario = 1;


SELECT 
    idComentario,
    a.texto,a.fkUsuario, 
    u.idUsuario, u.nickname, u.email,senha
   FROM Comentarios a INNER JOIN usuario u ON a.fkUsuario = u.idUsuario;

SELECT 
    *
FROM
    Score;
    
    SELECT 
    *
FROM
    Usuario;
    
    -- selects banco api
SELECT 
    idUsuario,
    nickname,
    email,
    AES_DECRYPT(senha, 'emterradebiladaquempimbaerei') AS senha
FROM
    Usuario
WHERE
    email = 'admin@admin.com'
        AND senha = AES_ENCRYPT('admin', 'emterradebiladaquempimbaerei');
        
        
SELECT idUsuario,nickname, email,aes_decrypt(senha, 'emterradebiladaquempimbaerei') as senha 
FROM usuario WHERE email = '${email}' AND senha = aes_encrypt('admin','emterradebiladaquempimbaerei');





-- select aes_encrypt('admin', 'chavefoda');