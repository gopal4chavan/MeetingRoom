--------------------------------------------------------------------------------------------	Location Table																							
--create table tblLocation(
--locationID int,
--locationName varchar(30) NOT NULL,
--CONSTRAINT locationID_pk PRIMARY KEY(locationID)
--);

--------------------------------------------------------------------------------------------	Room Table
--create table tblRoom(
--roomID int,
--roomName varchar(30) NOT NULL,
--location_id int  NOT NULL,
--CONSTRAINT roomID_pk PRIMARY KEY(roomID),
--CONSTRAINT locationID_fk FOREIGN KEY (location_id) REFERENCES tblLocation(locationID)
--);

--------------------------------------------------------------------------------------------	Slot Table
--CREATE TABLE tblSlot(
--slotID int,
--slot varchar(30) NOT NULL,
--CONSTRAINT slotID_pk PRIMARY KEY(slotID)
--);


--------------------------------------------------------------------------------------------	Booking Table
--CREATE TABLE tblBooking(
--bookingID INT IDENTITY(1,1),
--createdBy INT NOT NULL,
--location_id INT NOT NULL,
--room_id INT NOT NULL,
--timestamp SMALLDATETIME NOT NULL,
--fromDate DATE NOT NULL,
--toDate DATE NOT NULL,
--subject VARCHAR(60) NOT NULL,
--description VARCHAR(250) NOT NULL,
--CONSTRAINT bookingID_pk PRIMARY KEY(bookingID),
--CONSTRAINT location_id_fk FOREIGN KEY (location_id) REFERENCES tblLocation(locationID),
--CONSTRAINT room_id_fk FOREIGN KEY (room_id) REFERENCES tblRoom(roomID)
--);

--------------------------------------------------------------------------------------------	Date-Booking Table
--CREATE TABLE tbl_Booking_Date(
--bookingID int,
--location_room_id varchar(10) NOT NULL,
--date date NOT NULL,
--slotID int NOT NULL,
--CONSTRAINT booking_date_pk PRIMARY KEY(location_room_ID,date,slotID),
--CONSTRAINT bookingID_fk FOREIGN KEY (bookingID) REFERENCES tblBooking(bookingID),
--CONSTRAINT slotID_fk FOREIGN KEY (slotID) REFERENCES tblSlot(slotID)
--);

--------------------------------------------------------------------------------------------	Booking table and Date-Booking table store procedure
--alter procedure booking_proc
--@createdBy INT,
--@location_id INT,
--@room_id INT,
--@subject VARCHAR(60),
--@description VARCHAR(250),
--@fromDate DATE,
--@toDate DATE,
--@slot INT,
--@slot_count INT
--AS
--BEGIN
--	BEGIN TRAN
--		IF(@slot_count>4 OR @slot_count<1)
--			RAISERROR(N'Invalid no of slots',16,1,@slot_count);
--		ELSE 
--		BEGIN
--			INSERT INTO tblBooking(createdBy,location_id,room_id,timestamp,fromDate,toDate,subject,description)
--			VALUES(@createdBy,@location_id,@room_id,current_timestamp,@fromDate,@toDate,@subject,@description);

--			DECLARE @bookingID INT;
--			SET @bookingID=(SELECT max(bookingID) FROM tblBooking);
--			DECLARE @FD DATE = @fromDate;
--			DECLARE @TD DATE = @toDate;
--			DECLARE  @count INT= 0;
--			BEGIN TRY
--				WHILE(@count<@slot_count)		
--				BEGIN
--					WHILE(@FD <= @TD)
--					BEGIN				
--							INSERT INTO  tbl_Booking_Date (bookingID,location_room_id,date,slotID)VALUES(@bookingID,Convert(varchar,@location_id)+'-'+Convert(varchar,@room_id),@FD,@slot);
--							SET @FD = DATEADD(DAY,1,@FD);					
--					END
--					SET @FD=@fromDate;
--					SET @slot=@slot+1;
--					SET @count=@count+1;
--				END	
--				IF(@@ERROR <>0)
--				BEGIN
--					ROLLBACK TRAN;
--				END
--				COMMIT TRAN;
--			END TRY
--			BEGIN CATCH
--					print ERROR_MESSAGE()
--					print  ERROR_SEVERITY()
--					print ERROR_STATE()
--					ROLLBACK TRAN;
--			END CATCH
--		END	
--END

------------------------------------------------------------------------------------------- Update store procdure	
alter procedure update_booking_proc
@bookingID INT,
@createdBy INT,
@location_id INT,
@room_id INT,
@subject VARCHAR(60),
@description VARCHAR(250),
@fromDate DATE,
@toDate DATE,
@slot INT,
@slot_count INT
AS
BEGIN
	BEGIN TRAN
		IF(@slot_count>4 AND @slot_count<1)
			RAISERROR(N'Invalid no of slots',16,1,@slot_count);
		ELSE 
		BEGIN
			--INSERT INTO tblBooking(createdBy,location_id,room_id,timestamp,subject,description)
			--VALUES(@createdBy,@location_id,@room_id,current_timestamp,@subject,@description);

			UPDATE tblBooking 			
			SET location_id=@location_id,
				room_id=@room_id,
				timestamp=current_timestamp,
				subject=@subject,
				description=@description,
				fromDate=@fromDate,
				toDate=@toDate
			WHERE bookingID=@bookingId AND createdBy=@createdBy;

			--DECLARE @bookingID INT;
			--SET @bookingID=(SELECT max(bookingID) FROM tblBooking);
			DECLARE @FD DATE = @fromDate;
			DECLARE @TD DATE = @toDate;
			DECLARE  @count INT= 0;
			
			DELETE 
			FROM tbl_Booking_Date 
			WHERE bookingID=@bookingID;

			 
			BEGIN TRY
				WHILE(@count<@slot_count)		
				BEGIN
					WHILE(@FD <= @TD)
					BEGIN				
							INSERT INTO  tbl_Booking_Date (bookingID,location_room_id,date,slotID)VALUES(@bookingID,Convert(varchar,@location_id)+'-'+Convert(varchar,@room_id),@FD,@slot);
							SET @FD = DATEADD(DAY,1,@FD);					
					END
					SET @FD=@fromDate;
					SET @slot=@slot+1;
					SET @count=@count+1;
				END
				IF(@@ERROR <>0)
				BEGIN
					ROLLBACK TRAN;
				END
				COMMIT TRAN;
			END TRY
			BEGIN CATCH
					print ERROR_MESSAGE()
					print  ERROR_SEVERITY()
					print ERROR_STATE()
					ROLLBACK TRAN;
			END CATCH
		END	
END


--------------------------------------------------------------------------------------------	EXAMPLES

--------------------------------------------------------------------------------------------	Store procedure execution
exec booking_proc 
@createdBy=1,
@location_id=2,
@room_id=1,
@subject='sub',
@description='desc',
@fromDate='1-1-2017',
@toDate='1-3-2017',
@slot=1,
@slot_count=1;
----------------------------------------------------		Select		--

--select * from tblRoom;
--select * from tblLocation;
--select * from tblSlot;
--select * from tblBooking;
--select * from tbl_Booking_Date;
------------------------------------------------------		delete		--
--delete from tblLocation;
--delete from tblRoom;
--delete from tblSlot;
--delete from tblBooking;
--delete from tbl_Booking_Date;

-----------------------------------------------------			Insert			--
--insert into tblLocation values(1,'Loc1'),(2,'loc2'),(3,'loc3');
--insert into tblRoom values(1,'r1',1),(2,'r2',1),(3,'r3',1),(4,'r4',1),(5,'c1',2),(6,'c2',2),(7,'c3',2),(8,'c4',2),(9,'c5',2),(10,'c6',2),(11,'c-21',3),(12,'c-22',3),(13,'c-23',3);
--insert into tblSlot values(1,'1:00-1:30'),(2,'1:30-2:00'),(3,'2:00-2:30'),(4,'2:30-3:00');
--insert into tblSlot values(24,'12:30-13:00');


----------------------------------------------Example for simple transaction-----------------------------------------------
--create table test(id int,value int);
--insert into test values(1,1),(2,2);
--select * from test;
--begin tran
--	insert into test values(5,5),(20,20);
--	raiserror(50012,16,1);
--	raiserror(N'some msg',16,1);
--	if(@@ERROR<>0)
--	begin
--		rollback tran;
--	end
--commit tran

--------------------------------------------------------------------------------------------------Examples
--alter procedure booking_Proc
--@some varchar(10)
--as 
--begin
--	select @some+'lskdjflskdjf';
--end


--exec booking_Proc @some='xyz';


--insert into tblLocation values(1,'jh');
--insert into tblRoom values(1,'rm',1);
--insert into tblSlot values(1,'1=2-3');
--insert into tblBooking(createdBy,location_id,room_id,timestamp,subject,description)values(1,1,1,CURRENT_TIMESTAMP,'sub','desc');
--select * from tblBooking;
--delete from tblbooking;


--delete from tbl_booking_date;
--delete from tblbooking;


--Declare @a int =10;
--Declare @b int =3234;
--select Convert(varchar,@a)+'-'+Convert(varchar,@b);







-----------------------------------------------------------------------------------------------------------------------------------------

--exec update_booking_proc 
--@bookingID=13,
--@createdBy=1,
--@location_id=1,
--@room_id=1,
--@subject='123',
--@description='lkasfdj;laskdjf;laskdjf',
--@fromDate='9-13-2017',
--@toDate='9-15-2017',
--@slot=2,
--@slot_count=1;


select * from tblBooking
select * from tbl_Booking_Date;

select * from tbl_Booking_Date where bookingID=2;
select * from tbl_Booking_Date where bookingID=3;

select count(distinct slotID) from tbl_Booking_Date where bookingID=2;