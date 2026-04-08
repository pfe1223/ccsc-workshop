import unittest
import sys
# sys.path.append("/home/codio/workspace/code")
from probeable_exercise import min_index


class TestMinIntegerIndex(unittest.TestCase):

  def test_min_integer_index1(self):
    expected = -1
    actual = min_index([])
    feedback = "The function returns an incorrect index for an empty list."
    self.assertEqual(actual, expected, msg=feedback)

  def test_min_integer_index2(self):
    expected = 2
    actual = min_index([0,1,0])
    feedback = "The function returns an incorrect index for multiple occurences of the smallest integer."
    self.assertEqual(actual, expected, msg=feedback)

  def test_min_integer_index3(self):
    expected = 0
    actual = min_index([-1,4,6,8])
    feedback = "The function returns an incorrect index for the smallest integer."
    self.assertEqual(actual, expected, msg=feedback)

  def test_min_integer_index4(self):
    expected = 4
    actual = min_index([9,6,4,2,0])
    feedback = "The function returns an incorrect index the smallest integer."
    self.assertEqual(actual, expected, msg=feedback)