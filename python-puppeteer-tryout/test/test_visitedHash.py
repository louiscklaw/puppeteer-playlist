import os,sys
from pprint import pprint

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

import visitedHash

def test_visitedLink():
  visitedHash.storeVisitedLink('blablabla')
  assert False==visitedHash.checkVisitedHash('123321'), 'error found during testing unvisited link'
  assert True==visitedHash.checkVisitedHash('blablabla'), 'error found during testing visited link'

def test_Helloworld():
  visitedHash.helloworld()

def test():
  test_Helloworld()
  test_visitedLink()
