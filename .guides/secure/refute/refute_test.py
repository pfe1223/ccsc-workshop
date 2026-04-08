import os, random, re, io, subprocess, shutil, sys
from subprocess import Popen, PIPE, STDOUT

sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_partial_v2, FORMAT_V2_MD

score = 0
feedback = ""

from refute_exercise import correct, x, expected_output, actual_output

def test_input_with_correct_solution(student_input):
  expected_output = ""
  if (0 < student_input < 25) or (75 < student_input < 100):
    expected_output = str(student_input) + " is between 0 and 25 or 75 and 100"
  
  return expected_output


def test_input_with_given_solution(student_input):
  actual_output = ""
  if (student_input > 0 or student_input > 75) and (student_input < 25 or student_input < 100):
    actual_output = str(student_input) + " is between 0 and 25 or 75 and 100"
  
  return actual_output


## TODO: log all these individual points, overall score, and timestamp to a csv in .guides/secure/refute_conditionals
def calculate_score(points_y=0, points_x=0, points_e=0, points_a=0, points_c=0):
  score = points_y * points_x * (1 + points_e + points_a + points_e * points_c)
  return score


if correct:
  feedback += "❌ The variable correct does not have the correct value. Review the problem definition and your friend's program again to see if you missed something"
  score += calculate_score()
elif not isinstance(x, int):
  feedback += "❌ The data type of the input variable x is not correct. Review the problem definition and your friend's program again to see if you missed something"
  score += calculate_score(points_y=1)
elif expected_output != test_input_with_correct_solution(x):
  feedback += "❌ The expected_output is not correct. Review the problem definition and your friend's program again to see if you missed something"
  score += calculate_score(points_y=1, points_x=1)
elif actual_output != test_input_with_given_solution(x):
  feedback += "❌ The actual output is not correct. Review the problem definition and your friend's program again to see if you missed something"
  score += calculate_score(points_y=1, points_x=1, points_e=1)
elif actual_output == expected_output:
  feedback += f"❌ The input value {repr(x)} is not a counter example. Review the problem definition and your friend's program again to see if you missed something"
  score += calculate_score(points_y=1, points_x=1, points_e=1, points_a=1)
else:
  feedback += f"🎉 The input value {repr(x)} is a valid counter example. You have successfully refuted your friend's program"
  score += calculate_score(points_y=1, points_x=1, points_e=1, points_a=1, points_c=1)

# Send grades back to Codio
res = send_partial_v2(score, feedback, FORMAT_V2_MD)
exit(0 if res else 1)


