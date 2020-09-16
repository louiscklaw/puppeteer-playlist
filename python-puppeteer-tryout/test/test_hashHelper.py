import os,sys
from pprint import pprint

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

from hashHelper import *

def test_hash_helper_read():
  cls_ut = hash_helper()
  cls_ut.storeHash('1233211234567')
  assert True==cls_ut.checkHashExist('1233211234567'), 'error found during testing link helper read'

def test_hash_helper_write():
  cls_ut = hash_helper()
  cls_ut.storeHash('test adding link')


def test_Helloworld():
  lh = hash_helper()
  lh.helloworld()

def test():
  test_Helloworld()
  test_hash_helper_write()
  test_hash_helper_read()