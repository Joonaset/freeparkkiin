USE ParkDB;
DROP TABLE IF EXISTS Spots;
CREATE TABLE Spots (
		ID INT NOT NULL AUTO_INCREMENT,
		Latitude FLOAT(40),
		Longitude FLOAT(40),
		Address VARCHAR(40),
		Hours INT,
		Flag INT DEFAULT 0,
		Image VARCHAR(255),
		Restricted_Days VARCHAR(50),
		PRIMARY KEY (ID)
);
INSERT INTO Spots VALUES(NULL ,'60.2500', '25.7300' , 'Myllypurontie 2', '4','0', NULL, 'MA TI KE TO PE LA SU');
