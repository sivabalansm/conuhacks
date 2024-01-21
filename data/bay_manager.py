#! /bin/python
from datetime import datetime, timedelta

DATE_STR_FORMAT = "%Y-%m-%d %H:%M"

REGISTRATION_TIME = 0
PARK_TIME         = 1
CAR_TYPE          = 2


START_TIME_IDX = 0
END_TIME_IDX   = 1


dates = {}




class Bay:
    def __init__(self, startTime, endTime):
        self.start = startTime
        self.end = endTime

        self.bayObj = []

    def __getDate(date):
        dateObj = datetime.strptime(date, DATE_STR_FORMAT)

        return (dateObj.year, dateObj.month, dateObj.day)

    def __getTime(date):
        dateObj = datetime.strptime(date, DATE_STR_FORMAT)

        return (dateObj.hour, dateObj.minute)

    def __getTimeStamp(date):
        dateObj = datetime.strptime(date, DATE_STR_FORMAT) 
        return dateObj.timestamp()


    def insert(self, start, total_time):

        insert_idx = -1
        new_time_slot = (start, start + timedelta(hours=total_time))

        if len(self.bayObj) == 0:
            self.bayObj.append(new_time_slot)
            return 1

        for idx in range(len(self.bayObj)):

            next_idx = idx+1

            if idx+1 == len(self.bayObj):
                 if new_time_slot[1] <= self.bayObj[idx][0]:
                    insert_idx = idx
                    break

                 elif self.bayObj[idx][1] <= new_time_slot[0]:
                    insert_idx = next_idx
                    break
            
            else:

                 if idx == 0 and new_time_slot[1] <= self.bayObj[idx][0]:
                    insert_idx = idx
                    break

                 elif self.bayObj[idx][1] <= new_time_slot[0] and new_time_slot[1] <= self.bayObj[next_idx][0]:
                    insert_idx = next_idx
                    break



        
        if insert_idx == -1:
            return 0

        else:
            self.bayObj.insert(insert_idx, new_time_slot)
            return 1
    

def isValid(value):
    if value:
        print("Success insert")
    else:
        print("Fail insert")

testBay = Bay(7, 19)

isValid(testBay.insert(datetime(2022, 11, 10, 11, 14), 1))
isValid(testBay.insert(datetime(2022, 10, 10, 13, 14), 2))
isValid(testBay.insert(datetime(2022, 12, 10, 13, 14), 0.5))

print(testBay.bayObj)


testBay = Bay(7, 19)

isValid(testBay.insert(datetime(2022, 10, 10, 11, 14), 1))
isValid(testBay.insert(datetime(2022, 10, 10, 13, 14), 2))
isValid(testBay.insert(datetime(2022, 10, 10, 13, 14), 0.5))

print(testBay.bayObj)



