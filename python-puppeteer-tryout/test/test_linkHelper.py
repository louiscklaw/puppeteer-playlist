import os,sys
from pprint import pprint

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

from linkHelper import *
from visitedHash import *

def test_linkCount_duplicated_link():
  lh = link_helper()

  # link added by fetcher
  lh.addLink('https://www.google.com/?=test_linkHelper')
  assert 1==lh.linkCount(), 'adding new link failed'

  # fetcher visit link, it will add it into link visited
  assert 'https://www.google.com/?=test_linkHelper'==lh.getLink(), 'get new link failed, link is not expected'
  assert 0==lh.linkCount(), 'get new link failed'

  # # fetched the same url again, addlink should skip adding into lh
  lh.addLink('https://www.google.com/?=test_linkHelper')
  # print(lh.linkCount())
  assert 0==lh.linkCount(), 'adding duplicated new link failed'

def test_linkCount():
  lh = link_helper()
  lh.addLink('https://www.google.com/?=test_linkHelper')

  assert 1==lh.linkCount(), 'adding new link increase count failed'

def test_Helloworld():
  lh = link_helper()
  lh.helloworld()

def test():
  test_Helloworld()
  test_linkCount()
  test_linkCount_duplicated_link()
