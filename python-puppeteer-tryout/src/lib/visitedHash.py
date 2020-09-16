import os,sys
from pprint import pprint
import tempfile
import json
from linkHelper import *

'''handle visited link'''

# def loadHash():
#   pprint(f_visited.readlines())
#   return json.loads()

# def storeHash(hash_to_store):
#   return json.dump(hash_to_store)

visited_link = link_helper()

def storeVisitedLink(hash_to_add):
  visited_link.storeLink(hash_to_add)

def checkVisitedHash(hash_to_check):
  '''return true if visited'''
  return visited_link.checkLinkExist(hash_to_check)

def helloworld():
  print('helloworld {}'.format(__file__))
