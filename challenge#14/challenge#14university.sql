CREATE TABLE Mahasiswa (NIM varchar(20) primary key not null, NamaMahasiswa varchar(50) not null, Alamat text not null, KodeMatkul varchar(5) not null, foreign key(KodeMatkul) references Mata_Kuliah(KodeMatkul));
INSERT INTO Mahasiswa VALUES ('190110170137', 'Bintang Eka Bagaskara', 'Bandung','00001')

CREATE TABLE jurusan (idjurusan varchar(4) primary key not null, namajurusan varchar(100) not null);
INSERT INTO jurusan VALUES('J001','Teknik Informatika');

CREATE TABLE Mata_Kuliah (KodeMatkul varchar(5) primary key not null, NamaMatkul varchar(50) not null, IdDosen varchar(5) not null, foreign key(IdDosen) references Dosen(IdDosen));
INSERT INTO Mata_Kuliah VALUES ('J0M01', 'Matematika Diskrit', '00001');


CREATE TABLE Dosen (IdDosen varchar(5) primary key not null, NamaDosen varchar(50) not null, idjurusan varchar(4)not null, foreign key(idjurusan) references jurusan(idjurusan));
INSERT INTO Dosen VALUES ('00001', 'Iwan Iswandi', 'J001');

CREATE TABLE Kontrak (id integer primary key autoincrement, Nilai varchar(4) not null, NIM varchar(20) not null, KodeMatkul varchar(5) not null, foreign key(NIM) references Mahasiswa(NIM), foreign key(KodeMatkul) references Mata_Kuliah(KodeMatkul));
CREATE TABLE sqlite_sequence(name,seq);
INSERT INTO Kontrak(Nilai, NIM, KodeMatkul) VALUES ('70', '190110170137', '00001');
