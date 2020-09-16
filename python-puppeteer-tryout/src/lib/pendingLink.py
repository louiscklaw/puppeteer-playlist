import os,sys
from pprint import pprint
import tempfile
import json
from threading import Thread, Lock

import visitedHash
from getLinkHash import *

'''handle pending visit link'''

pending_link=[]
oper_pending_mutex = Lock()

def addToPendingIfNewLink(link_to_test):
  try:
    oper_pending_mutex.acquire()

    link_hash = getLinkHash(link_to_test)
    if visitedHash.checkVisitedHash(link_hash):
      pass
    else:
      pass

  except Exception as e:
    pass
  finally:
    oper_pending_mutex.release()



def getPendingVisitLink():
  return 'link'


def helloworld():
  print('helloworld {}'.format(__file__))
