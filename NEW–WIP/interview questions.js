Mock Interview Questions 

During a mock interview, you should ask one of the interview questions below and one of the code reading questions. If the students finish early, you can ask another. 

1. Given two lists of integers, find all of the integers that appear in both lists

2. Given a list of integers and a target value, determine if any two numbers in the list add up to the target value ( don’t worry about the efficiency here, just correctness.)


Code reading questions: 

1)

def Analyze(numbers):
	
	result = []
	index = {}
	min = None
	max = None

	for n in numbers:
		index[n] = True
		if not max or n > max:
			masx = n
		if not min or n < min: 
			min = n
	for n in range(min + 1, max):
		if not n in index:
			result.append(n)

	return result

2)

import urllib2 

def GetNext(content, last_location):
	start = content.find('<', last_location)
	if start == -1:
		return None, -1

	end = content.find('>', start + 1)
	if end == -1:
		return None, -1

	t = content[start:end + 1]
	return (t, start)

def GetType(t):
	if t[1] == '/' or t[1] == '!':
		return None

	space = t.find(' ')
	if space != -1: 
		return t[1:space]
	else:
		return  t[1:-1]

def GetCounts(url):
	counts = {}
	response = urllib2.urlopen(url)
	content = response.read()

	next_location = 0
	while True: 
		t, last_location = GetNext(content, next_location)
		if not t:
			break

		t_type = GetType(t)
		if t_type:
			if not t_type in counts:
				counts[t_type] = 0
			counts[t_type] = counts[t_type] + 1

		next_location = last_location + len(t) + 1

	return counts
