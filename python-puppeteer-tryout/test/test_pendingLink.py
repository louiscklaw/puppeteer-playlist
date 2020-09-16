import os,sys
from pprint import pprint

TEST_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.join(TEST_DIR,'..')
SRC_DIR=os.path.join(PROJ_HOME, 'src')
SRC_LIB=os.path.join(SRC_DIR,'lib')

sys.path.append(SRC_LIB)

import pendingLink

link_to_test=[
  'https://www.google.com',
  'https://www.yahoo.com',
  'https://www.microsoft.com',
  'https://www.facebook.com',
  'https://www.amazon.com',
]

def test_getPendingLink():
  for link in link_to_test:
    result = pendingLink.getPendingLink()
    assert link==result, 'error during getting pending link'

def test_addPendingLink():
  for link in link_to_test:
    pendingLink.addPendingLink(link)

def test_Helloworld():
  pendingLink.helloworld()

def test():
  test_Helloworld()
  test_addPendingLink()
  test_getPendingLink()
