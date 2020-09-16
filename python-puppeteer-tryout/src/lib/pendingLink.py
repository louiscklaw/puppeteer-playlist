import os,sys
from pprint import pprint
import tempfile
import json
from threading import Thread, Lock

sys.path.append(os.path.dirname(__file__))

from linkHelper import *

'''handle pending visit link'''

pending_link = link_helper()

def addPendingLink(link_to_add):
  pending_link.addLink(link_to_add)

def getPendingLink():
  return pending_link.getLink()

def getRemainingLinkCount():
  return pending_link.linkCount()

def helloworld():
  print('helloworld {}'.format(__file__))
