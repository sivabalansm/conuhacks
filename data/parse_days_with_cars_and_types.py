#! /bin/python
import csv
from datetime import datetime

DATE_STR_FORMAT = "%Y-%m-%d %H:%M"

REGISTRATION_TIME = 0
PARK_TIME         = 1
CAR_TYPE          = 2


dates = {}


def getDate(date):
    dateObj = datetime.strptime(date, DATE_STR_FORMAT)
    return (dateObj.year, dateObj.month, dateObj.day)

def getTime(date):
    dateObj = datetime.strptime(date, DATE_STR_FORMAT)
    return (dateObj.hour, dateObj.minute)

def putTime(date_dict, reg_date, reg_time, park_date, park_time, car_type):

    if reg_date == park_date and reg_time == park_time:
        return 0

    if park_date not in date_dict:
        date_dict[park_date] = {car_type : 1}
        return 1

    if car_type not in date_dict[park_date]:
        date_dict[park_date][car_type] = 1
        return 1

    date_dict[park_date][car_type] += 1

def getHours(car_dict):
    totalTime = 0
    time = 0
    for car in car_dict:
        car_num = car_dict[car]
        if car == 'class 1 truck':
            time = 1
        elif car == 'class 2 truck':
            time = 2
        else:
            time = 0.5
        totalTime += time * car_num
    return totalTime



def main():
    with open("datafile.csv", "r") as f:
        csvObj = csv.reader(f, delimiter=",")
        for row in csvObj:
            reg_date     = getDate(row[REGISTRATION_TIME])
            reg_time     = getTime(row[REGISTRATION_TIME])

            park_date    = getDate(row[PARK_TIME])
            park_time    = getTime(row[PARK_TIME])
            
            car_type     = row[CAR_TYPE]

            
            putTime(dates, reg_date, reg_time, park_date, park_time, car_type)


    

main() 

"""
Bays.create()
baysObj.placeCar(reg_time, park_time, car_type)


"""
