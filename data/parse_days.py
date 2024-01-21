#! /bin/python
import csv
from datetime import datetime
from bay_manager import Bay, createBays
import requests

DATE_STR_FORMAT = "%Y-%m-%d %H:%M"

REGISTRATION_TIME = 0
PARK_TIME         = 1
CAR_TYPE          = 2


dates = {}
date_ratio = {}

def getDate(date):
    dateObj = datetime.strptime(date, DATE_STR_FORMAT)
    return (dateObj.year, dateObj.month, dateObj.day)

def getTime(date):
    dateObj = datetime.strptime(date, DATE_STR_FORMAT)
    return (dateObj.hour, dateObj.minute)

def correctDay(day):
    day = str(day)
    if len(day) != 2:
        return "0" + day
    else:
        return day

url = "http://127.0.0.1:3003/api/reservation/"

def placeCars(bays_ls, park_date_obj, reg_date_obj, hours, park_date_obj_dates_only, car_type):
    for idx in range(len(bays_ls)):
        bay = bays_ls[idx]
        if bay.insert(park_date_obj, hours, car_type):

            myobj = { "type": car_type, "time": f"{park_date_obj.hour}:{park_date_obj.minute}", "bay": idx+1, "date": f"{park_date_obj.year}-{park_date_obj.month}-{correctDay(park_date_obj.day)}"}
            print(requests.post(url, json = myobj))
            #print(myobj)
            
            return 1


    print("Placement failed", park_date_obj_dates_only, reg_date_obj, park_date_obj, hours)
    return 0

def isSuccess(func, park_date_obj_dates_only):
    if park_date_obj_dates_only not in date_ratio:
        date_ratio[park_date_obj_dates_only] = [0, 0]
    if func:
        date_ratio[park_date_obj_dates_only][0] += 1
    else:
        date_ratio[park_date_obj_dates_only][1] += 1

        


def putTime(date_dict, reg_date_obj, park_date_obj, car_type):
    park_obj_value = (reg_date_obj, getHours(car_type))

    if park_date_obj == reg_date_obj:
        return 0

    park_date_obj_dates_only = datetime(park_date_obj.year, park_date_obj.month, park_date_obj.day)

     

    if park_date_obj_dates_only not in date_dict:
        #date_dict[park_date_obj_dates_only] = [park_obj_value]
        date_dict[park_date_obj_dates_only] = createBays()
        isSuccess(placeCars(date_dict[park_date_obj_dates_only], park_date_obj, park_obj_value[0], park_obj_value[1], park_date_obj_dates_only, car_type), park_date_obj_dates_only)

        return 1

    #date_dict[park_date_obj_dates_only].append((reg_date_obj, getHours(car_type)))

    isSuccess(placeCars(date_dict[park_date_obj_dates_only], park_date_obj, park_obj_value[0], park_obj_value[1], park_date_obj_dates_only, car_type), park_date_obj_dates_only)
    """
    if reg_date == park_date and reg_time == park_time:
        return 0

    if park_date not in date_dict:
        date_dict[park_date] =  [(car_type)]
        return 1

    if car_type not in date_dict[park_date]:
        date_dict[park_date][car_type] = 1
        return 1

    date_dict[park_date][car_type] += 1
    """

def getHours(car):
    time = 0
    if car == 'class 1 truck':
        time = 1
    elif car == 'class 2 truck':
        time = 2
    else:
        time = 0.5
    return time



def main():
    with open("datafile.csv", "r") as f:
        csvObj = csv.reader(f, delimiter=",")
        for row in csvObj:
            #reg_date     = getDate(row[REGISTRATION_TIME])
            #reg_time     = getTime(row[REGISTRATION_TIME])

            #park_date    = getDate(row[PARK_TIME])
            #park_time    = getTime(row[PARK_TIME])
            
            reg_date_obj = datetime.strptime(row[REGISTRATION_TIME], DATE_STR_FORMAT)
            park_date_obj = datetime.strptime(row[PARK_TIME], DATE_STR_FORMAT)
            car_type     = row[CAR_TYPE]

            
            putTime(dates, reg_date_obj, park_date_obj, car_type)


    
    for date in dates:
        print(f"DATE: {date}")
        for bay in dates[date]:
            print(bay.bayObj)

            #for timeslot in bay.bayObj:
            #    print(timeslot)
    for date in date_ratio:
        print(f"DATE: {date} ratio: {date_ratio[date]}")

main() 
