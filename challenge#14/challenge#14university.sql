
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Mahasiswa (NIM varchar(20) primary key not null, NamaMahasiswa varchar(50) not null, Alamat text not null, KodeMatkul varchar(5) not null, foreign key(KodeMatkul) references Mata_Kuliah(KodeMatkul));
COMMIT;

PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE jurusan (idjurusan varchar(4) primary key not null, namajurusan varchar(100) not null);
INSERT INTO jurusan VALUES('J001','Teknik Informatika');
COMMIT;

PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Mata_Kuliah (KodeMatkul varchar(5) primary key not null, NamaMatkul varchar(50) not null, IdDosen varchar(5) not null, foreign key(IdDosen) references Dosen(IdDosen));
INSERT INTO Mata_Kuliah VALUES ('J0M01', 'Matematika Diskrit', '00001');
COMMIT;

PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Dosen (IdDosen varchar(5) primary key not null, NamaDosen varchar(50) not null, idjurusan varchar(4)not null, foreign key(idjurusan) references jurusan(idjurusan));
COMMIT;


