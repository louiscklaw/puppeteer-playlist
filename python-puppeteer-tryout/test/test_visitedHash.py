import os,sys
from pprint import pprint

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

import visitedHash

def test_visitedHash():
  visitedHash.storeVisitedLink('http://www.google.com')
  assert False==visitedHash.checkVisitedLink('http://www.yahoo.com'), 'error found during testing unvisited link'
  assert True==visitedHash.checkVisitedLink('http://www.google.com'), 'error found during testing visited link'

def test_Helloworld():
  visitedHash.helloworld()

def test():
  test_Helloworld()
  test_visitedHash()
