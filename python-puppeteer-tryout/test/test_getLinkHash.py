import os,sys
from pprint import pprint

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

import getLinkHash

def test_call_getLinkHash(o):
  return getLinkHash.getLinkHash(o)

def test_getLinkHash():
  test_result = test_call_getLinkHash('123')
  assert '202cb962ac59075b964b07152d234b70'==test_result, "getLinkHash('123') failed {}".format(test_result)

  test_result = test_call_getLinkHash('helloworld')
  assert 'fc5e038d38a57032085441e7fe7010b0'==test_result, "getLinkHash('helloworld') failed {}".format(test_result)

def test_Helloworld():
  getLinkHash.helloworld()

def test():
  test_getLinkHash()
  test_Helloworld()
