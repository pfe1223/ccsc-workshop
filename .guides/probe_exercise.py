import sys
sys.path.append("/home/codio/workspace/code/")

class MissingVariableError(Exception):
  def __str__(self):
    return "Error: The required 'int_list' variable is missing. Please declare 'int_list' as a list of integers."


def check_import_and_probe():
  try:
    from probeable_exercise import int_list

    def min_index(int_list: list[int]) -> int:
      if not int_list: return -1
      result = 0
      index = 1
      while index < len(int_list):
          if int_list[index] <= int_list[result]:
              result = index
          index += 1
      return result

    if __name__=="__main__":
      file_name = "/home/codio/workspace/code/probeable_exercise_io_logs.txt"
      result = min_index(int_list)
      with open(file_name, "a") as logs:
        logs.write(f"int_list = {int_list} , result = {result} \n")
      
      with open(file_name, "r") as logs:
        io_results = logs.readlines()
        for io in io_results:
          print(io)
      
  except ImportError:
    raise MissingVariableError()
try:
  check_import_and_probe()
except MissingVariableError as e:
  print(e)
  sys.exit(1)
