import os,sys
from pprint import pprint

from multiprocessing import Pool

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

import fetcher

def test_Helloworld():
  fetcher.helloworld()

def test():
  test_Helloworld()
