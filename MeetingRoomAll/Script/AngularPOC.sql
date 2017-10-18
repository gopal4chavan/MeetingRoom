--------------------------------------------------------------------------------------------	Location Table																							
--CREATE TABLE TblLocation(
--LocationID INT,
--LocationName VARCHAR(30) NOT NULL,

--CONSTRAINT PK_TblLocation PRIMARY KEY(LocationID)
--);

--INSERT TblLocation (LocationID, LocationName) VALUES (1, N'Uppal')
--INSERT TblLocation (LocationID, LocationName) VALUES (2, N'Waverock')
--INSERT TblLocation (LocationID, LocationName) VALUES (3, N'Jubilee Hils')

--------------------------------------------------------------------------------------------	Room Table
--CREATE TABLE TblRoom(
--RoomID INT,
--RoomName VARCHAR(30) NOT NULL,
--LocationID INT  NOT NULL,

--CONSTRAINT PK_TblRoom PRIMARY KEY(RoomID),
--CONSTRAINT FK_TblRoom_TblLocation FOREIGN KEY (LocationID) REFERENCES TblLocation(LocationID)
--);

--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (1, N'UPL-C21 ( 9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (2, N'UPL-C22 (9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (3, N'UPL-C23 (9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (4, N'UPL-C24 ( 9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (5, N'Wr-C10 (5-7 Seating)', 2)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (6, N'Wr-C11 (4 Seating )', 2)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (7, N'Wr-C12 (6-8 Seating)', 2)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (8, N'Wr-C13 (5-8 Seating)', 2)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (9, N'Wr-C14 ( 20-29 Seating)', 2)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (10, N'Wr-C15 (20-25 Seating)', 2)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (11, N'JH-Chinthan', 3)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (12, N'UPL-C25 (15-18 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (13, N'UPL-C26 ( 3-5 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (14, N'UPL-C27 (12-14 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (15, N'UPL-C28 (16-20 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (16, N'UPL-C32 (9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (17, N'UPL-C33 (9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (18, N'UPL-C34 (9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (19, N'UPL-C35 ( 9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (20, N'UPL-C36 (9-11 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (21, N'UPL-C37 ( 4-6 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (22, N'UPL-C41 (2-3 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (23, N'UPL-C42 (2-3 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (24, N'UPL-C43 (4-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (25, N'UPL-C44 (2 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (26, N'UPL-C45 (2 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (27, N'UPL-C46 ( 5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (28, N'UPL-C47 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (29, N'UPL-C48 (14-16 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (30, N'UPL-C49 ( 5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (31, N'UPL-C50 (18-20 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (32, N'UPL-C51 (60-80 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (33, N'UPL-C52 (6-8 Open Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (34, N'UPL-C53 (6-8 Open Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (35, N'UPL-C54 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (36, N'UPL-C55 (1-2 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (37, N'UPL-C56 (1-2 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (38, N'UPL-C57 (10-12 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (39, N'UPL-C58 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (40, N'UPL-C59 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (41, N'UPL-C60 ( 12-16 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (42, N'UPL-C61 (3-4 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (43, N'UPL-C62 (3-4 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (44, N'UPL-C63 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (45, N'UPL-C64 (4-5 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (46, N'UPL-C65 (7-8 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (47, N'UPL-C66 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (48, N'UPL-C67 (14-16 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (49, N'UPL-C68 (3-4 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (50, N'UPL-C69 (3-4 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (51, N'UPL-C70 ( 5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (52, N'UPL-C71 ( 5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (53, N'UPL-C72 (6-8 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (54, N'UPL-C73 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (55, N'UPL-C74 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (56, N'UPL-C75 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (57, N'UPL-C76 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (58, N'UPL-C77 (14-16 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (59, N'UPL-C78 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (60, N'UPL-C79 (5-7 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (61, N'UPL-C80 ( 3-4 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (62, N'UPL-C81 ( 3-4 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (63, N'UPL-C82 ( 3-4 Seating)', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (64, N'UPL-Manthan', 1)
--INSERT INTO TblRoom (RoomID, RoomName, LocationID) VALUES (65, N' UPL-Pantry (120-130 Seating)', 1)

--------------------------------------------------------------------------------------------	Slot Table
--CREATE TABLE TblSlot(
--SlotID INT,
--Slot VARCHAR(30) NOT NULL,
--CONSTRAINT PK_TblSlot PRIMARY KEY(SlotID)
--);


--INSERT INTO TblSlot (SlotID, Slot) VALUES (1, N'01:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (2, N'01:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (3, N'02:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (4, N'02:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (5, N'03:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (6, N'03:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (7, N'04:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (8, N'04:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (9, N'05:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (10, N'05:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (11, N'06:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (12, N'06:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (13, N'07:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (14, N'07:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (15, N'08:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (16, N'08:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (17, N'09:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (18, N'9:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (19, N'10:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (20, N'10:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (21, N'11:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (22, N'11:30')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (23, N'12:00')
--INSERT INTO TblSlot (SlotID, Slot) VALUES (24, N'12:30')
--------------------------------------------------------------------------------------------	Booking Table

--CREATE TABLE TblBooking(
--BookingID INT IDENTITY(1,1),
--CreatedBy INT NOT NULL,
--LocationID INT NOT NULL,
--RoomID INT NOT NULL,
--TimeStamp SMALLDATETIME NOT NULL,
--FromDate DATE NOT NULL,
--ToDate DATE NOT NULL,
--SlotID INT NOT NULL,
--SlotCount INT NOT NULL,
--Subject VARCHAR(60) NOT NULL,
--Description VARCHAR(250) NOT NULL,
--Type VARCHAR(20) NOT NULL,

--CONSTRAINT PK_TblBooking PRIMARY KEY(BookingID),
--CONSTRAINT FK_TblBooking_TblLocation FOREIGN KEY (LocationID) REFERENCES TblLocation(LocationID),
--CONSTRAINT FK_TblBooking_TblRoom FOREIGN KEY (RoomID) REFERENCES TblRoom(RoomID),
--CONSTRAINT FK_TblBooking_TblSlot FOREIGN KEY (SlotID) REFERENCES TblSlot(SlotID)
--);

------------------------------------------------------------------------------------------	Date-Booking Table
--CREATE TABLE TblBookingDate(
--SNo INT IDENTITY(1,1) NOT NULL,
--BookingID INT,
--LocationID INT NOT NULL,
--RoomID INT NOT NULL,
--Date DATE NOT NULL,
--SlotID INT NOT NULL,
--Status VARCHAR(30) NOT NULL,
--StatusUpdated Date,

--CONSTRAINT PK_TblBookingDate PRIMARY KEY(SNo),
--CONSTRAINT FK_TblBookingDate_TblBooking FOREIGN KEY (BookingID) REFERENCES TblBooking(BookingID),
--CONSTRAINT FK_TblBookingDate_TblLocation FOREIGN KEY (LocationID) REFERENCES TblLocation(LocationID),
--CONSTRAINT FK_TblBookingDate_TblRoom FOREIGN KEY (RoomID) REFERENCES TblRoom(RoomID),
--CONSTRAINT FK_TblBookingDate_TblSlot FOREIGN KEY (SlotID) REFERENCES TblSlot(SlotID)
--);

------------------------------------------------------------------------------------------	Booking table and Date-Booking table store procedure
--CREATE PROCEDURE SP_Booking
--@CreatedBy INT,
--@LocationID INT,
--@RoomID INT,
--@Subject VARCHAR(60),
--@Description VARCHAR(250),
--@FromDate DATE,
--@ToDate DATE,
--@SlotID INT,
--@SlotCount INT
--AS
--BEGIN
--	BEGIN TRY
--		BEGIN TRAN
--		IF(@SlotCount>4 OR @SlotCount<1)
--			RAISERROR(N'Invalid number of Slots',16,1);
--		ELSE IF(@FromDate>@ToDate OR DATEDIFF(DAY, @FromDate, @ToDate)>30)
--			RAISERROR(N'Invalid Date Range',16,1);
--		ELSE 
--		BEGIN
--			INSERT INTO TblBooking(CreatedBy,LocationID,RoomID,TimeStamp,FromDate,ToDate,SlotID,SlotCount ,Subject,Description,Type)
--			VALUES(@CreatedBy,@LocationID,@RoomID,CURRENT_TIMESTAMP,@FromDate,@ToDate,@SlotID,@SlotCount,@Subject,@Description,'NORMAL');

--			DECLARE @BookingID INT;
--			SET @BookingID=(SELECT max(BookingID) FROM TblBooking);
--			DECLARE @FD DATE = @FromDate;
--			DECLARE @TD DATE = @ToDate;
--			DECLARE  @Count INT= 0;		
--			WHILE(@Count<@SlotCount)		
--			BEGIN
--				WHILE(@FD <= @TD)
--				BEGIN							
--					IF NOT EXISTS(SELECT 1 FROM TblBookingDate WHERE LocationID=@LocationID AND RoomID=@RoomID AND Date=@FD AND SlotID=@SlotID AND Status='ACTIVE')
--					BEGIN
--						INSERT INTO  TblBookingDate (BookingID,LocationID,RoomID,Date,SlotID,Status,StatusUpdated)
--							VALUES(@BookingID,@LocationID,@RoomID,@FD,@SlotID,'ACTIVE',NULL);
--						SET @FD = DATEADD(DAY,1,@FD);					
--					END
--					ELSE
--						RAISERROR(N'The current Booking overlaps the Existing booking',16,1);
--				END
--				SET @FD=@FromDate;
--				SET @SlotID=@SlotID+1;
--				SET @Count=@Count+1;
--			END	
--			COMMIT TRAN;
--		END
--	END TRY
--	BEGIN CATCH
--		ROLLBACK TRAN;
--		DECLARE @ERRORMSG VARCHAR(350) = ERROR_MESSAGE();
--		RAISERROR(@ERRORMSG,16,1);
--	END CATCH
--END

--exec SP_Booking 
--@CreatedBy = 1,
--@LocationID = 1,
--@RoomID = 1,
--@Subject = 'subject',
--@Description = 'Description',
--@FromDate = '2017/08/25',
--@ToDate = '2017/08/29',
--@SlotID = 1,
--@SlotCount = 2;

----------------------------------------------------------------------------------------- Update store procdure	
--Alter procedure SP_UpdateBooking
--@BookingID INT,
--@CreatedBy INT,
--@LocationID INT,
--@RoomID INT,
--@Subject VARCHAR(60),
--@Description VARCHAR(250),
--@FromDate DATE,
--@ToDate DATE,
--@SlotID INT,
--@SlotCount INT,
--@EditSlots BIT
--AS
--BEGIN	
--	BEGIN TRY
--		BEGIN TRAN
--		IF(@SlotCount>4 OR @SlotCount<1)
--			RAISERROR(N'Invalid number of Slots',16,1);
--		ELSE IF(@FromDate>@ToDate OR DATEDIFF(DAY, @FromDate, @ToDate)>30)
--			RAISERROR(N'Invalid Date Range',16,1);
--		ELSE IF(@EditSlots=1)
--		BEGIN
--			UPDATE TblBooking 			
--			SET LocationID=@LocationID,RoomID=@RoomID,TimeStamp=CURRENT_TIMESTAMP,Subject=@Subject,Description=@Description,FromDate=@FromDate,ToDate=@ToDate,SlotID=@SlotID,@SlotCount=@SlotCount
--			WHERE BookingID=@BookingID AND CreatedBy=@CreatedBy;

--			UPDATE TblBookingDate
--			SET Status='TEMP_EDITED',StatusUpdated=CURRENT_TIMESTAMP
--			WHERE BookingID=@BookingID AND Status='ACTIVE'

--			DECLARE @FD DATE = @FromDate;
--			DECLARE @TD DATE = @ToDate;
--			DECLARE  @Count INT= 0;		

--			WHILE(@Count<@SlotCount)		
--			BEGIN
--				WHILE(@FD <= @TD)
--				BEGIN				
--					IF NOT EXISTS(SELECT 1 FROM TblBookingDate WHERE LocationID=@LocationID AND RoomID=@RoomID AND Date=@FD AND SlotID=@SlotID AND Status='ACTIVE')
--					BEGIN
--						IF NOT EXISTS(SELECT 1 FROM TblBookingDate WHERE LocationID=@LocationID AND RoomID=@RoomID AND Date=@FD AND SlotID=@SlotID AND Status='TEMP_EDITED')
--							INSERT INTO  TblBookingDate (BookingID,LocationID,RoomID,Date,SlotID,Status,StatusUpdated)
--								VALUES(@BookingID,@LocationID,@RoomID,@FD,@SlotID,'ACTIVE',NULL);
--						ELSE
--							UPDATE TblBookingDate SET Status='ACTIVE',StatusUpdated=NULL WHERE LocationID=@LocationID AND RoomID=@RoomID AND Date=@FD AND SlotID=@SlotID;							
--						SET @FD = DATEADD(DAY,1,@FD);			
--					END
--					ELSE
--						RAISERROR(N'The current Booking overlaps the Existing booking',16,1);				
--				END
--				SET @FD=@FromDate;
--				SET @SlotID=@SlotID+1;
--				SET @Count=@Count+1;
--			END
--			UPDATE TblBookingDate SET Status='EDITED' Where BookingID=@BookingID AND Status='TEMP_EDITED';					
--			COMMIT TRAN;
--		END
--	END TRY
--	BEGIN CATCH					
--		ROLLBACK TRAN;
--		DECLARE @ERRORMSG VARCHAR(350) = ERROR_MESSAGE();
--		RAISERROR(@ErrorMsg,16,1);
--	END CATCH
--END

--exec SP_UpdateBooking
--@BookingID=3,
--@CreatedBy=1,
--@LocationID=1,
--@RoomID=1,
--@Subject='123',
--@Description='lkf',
--@FromDate='2017-08-26',
--@ToDate='2017-08-27',
--@SlotID=2,
--@SlotCount=2,
--@EditSlots=1;