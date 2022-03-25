/*�������� ��
*/

CREATE DATABASE testSGS;
GO

/* ������� �� ��
*/

USE testSGS;
GO


/* � ���� �� ������� 1-� �������
*/

CREATE TABLE containers (
    id INT NOT NULL,
    number INT,
    type VARCHAR(100),
    length INT,
    width INT,
    height INT,
    weight INT,
    empty BINARY,
    date DATETIME,
    PRIMARY KEY(id)
);

/* ������� 2-� �������
*/

CREATE TABLE operations (
    id INT NOT NULL,
    containerId INT NOT NULL,
    beginDate DATETIME,
    endDate DATETIME,
    operationType VARCHAR(100),
    operator VARCHAR(100),
    place VARCHAR(100),
    PRIMARY KEY(id, containerId)
);

/* ������� ������������ ������ � 1-� �������
*/

INSERT INTO containers (id,number,type,length,width,height,weight,empty,date) 
    VALUES
        (1,1,'Fruites', 20, 60, 20, 200, 0, '20220315 13:15:00'),
        (2,2,'Metal', 40, 100, 40, 1000, 0, '20210409 17:45:00'),
        (3,3,'Furniture', 20, 60, 20, 500, 1, '20210617 10:30:00'),
        (4,4,'Hardware', 40, 120, 40, 100, 1, '20220105 09:00:00');

/* ������� ������������ ������ � 2-� �������
*/

INSERT INTO operations(id,containerId,beginDate,endDate,operationType,operator,place) 
	VALUES
    	(1,1,'20220114 09:30:00', '20220115 09:30:00', 'sell','Ivan', 'Moscow'),
    	(2,2,'20211221 08:45:00', '20211223 12:15:00', 'buy','James', 'Dubai'),
    	(3,3,'20220306 18:50:00', '20220310 9:00:00', 'pending','Bob', 'London'),
    	(4,4,'20220221 12:00:00', '20220301 10:30:00', 'buy','Adam', 'Paris'),
    	(5,5,'20210911 09:25:00', '20210911 16:00:00', 'abort','Steven', 'Berlin');

/* ��������� �� 1-� ������� json
*/

SELECT *
FROM containers
FOR JSON AUTO;

/* ��������� JSON �� ������ ������� �� id ����������, �������� 3
*/

SELECT * FROM operations WHERE containerId=3 FOR JSON AUTO;


