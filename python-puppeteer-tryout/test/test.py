import os,sys
from pprint import pprint

import test_helloworld
import test_getLinkHash
import test_visitedHash
import test_pendingLink
import test_linkHelper

def test():
  test_helloworld.test()
  test_getLinkHash.test()
  test_visitedHash.test()
  test_pendingLink.test()
  test_linkHelper.test()

if __name__ == '__main__':
  test()
