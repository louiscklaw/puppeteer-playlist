import os,sys
from pprint import pprint
import tempfile
import json
from hashHelper import *

from getLinkHash import *

'''handle visited link'''

# def loadHash():
#   pprint(f_visited.readlines())
#   return json.loads()

# def storeHash(hash_to_store):
#   return json.dump(hash_to_store)

visited_hash = hash_helper()

def storeVisitedLink(link_to_add):
  hash_to_add=getLinkHash(link_to_add)

  visited_hash.storeHash(hash_to_add)

def checkVisitedLink(link_to_check):
  '''return true if visited'''
  hash_to_check=getLinkHash(link_to_check)
  return visited_hash.checkHashExist(hash_to_check)

def listVisitedHash():
  pprint(visited_hash.list_link())

def helloworld():
  print('helloworld {}'.format(__file__))
