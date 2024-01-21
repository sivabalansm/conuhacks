fp = open('./datafile.csv')

reservations = []

for line in fp:
  reservations.append(line.strip().split(','))

dates = {}

for reservation in reservations:
  date, time = reservation[1].split()
  if date not in dates:
    dates[date] = [reservation]
  else:
    dates[date].append(reservation)

import json

with open('dates.json', 'w', encoding='utf-8') as f:
    json.dump(dates, f, ensure_ascii=False, indent=4)

# def getCarTime(car):
#   cars = {
#     'compact': 30,
#     'medium': 30,
#     'full-size': 30,
#     'class 1 truck': 60,
#     'class 2 truck': 120,
#   }
#   startHour, startMinute = car[1].split(' ')[1].split(':')
#   startTime = int(startHour) * 60 + int(startMinute)
#   endTime = startTime + cars[car[2]]

#   return (startTime, endTime)

# def isCompatible(car_1, car_2):
#   time_1 = getCarTime(car_1)
#   time_2 = getCarTime(car_2)

#   return time_1[0] > time_2[1] or time_1[1] < time_2[0]

# def isPossible(carsToPlace, schedule=[[] for _ in range(5)]):
#   if not carsToPlace: return True

#   for idx in range(len(schedule)):
#     new_schedule = [bay[:] for bay in schedule]
#     bay = new_schedule[idx]

#     compatible = True
#     for carPlaced in bay:
#       if not isCompatible(carPlaced, carsToPlace[0]):
#         compatible = False
#         break
    
#     if compatible:
#       new_schedule = [bay[:] for bay in schedule]
#       new_schedule[idx].append(carsToPlace[0])
#       if isPossible(carsToPlace[1:], new_schedule):
#         return True
#       else:
#         if schedule[idx] == []:
#           break

#   return False

# for date, values in dates.items():
#   values.sort(key=lambda value: value[0].split())
#   schedule = []

#   for idx, value in enumerate(values):
#     percentage = (idx / len(values)) * 100
#     print(f'{percentage:.2f}%')
#     print(value)
#     if isPossible([value] + schedule):
#       schedule.append(value)
#       print('accepted')
#     else:
#       print('rejected')

#   dates[date] = schedule
#   break
      
# print(len(dates[date]))
