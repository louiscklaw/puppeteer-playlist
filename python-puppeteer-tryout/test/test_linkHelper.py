import os,sys
from pprint import pprint

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

from linkHelper import *

def test_link_helper_read():
  cls_ut = link_helper()
  cls_ut.storeLink('1233211234567')
  assert True==cls_ut.checkLinkExist('1233211234567'), 'error found during testing link helper read'

def test_link_helper_write():
  cls_ut = link_helper()
  cls_ut.storeLink('test adding link')


def test_Helloworld():
  lh = link_helper()
  lh.helloworld()

def test():
  test_Helloworld()
  test_link_helper_write()
  test_link_helper_read()