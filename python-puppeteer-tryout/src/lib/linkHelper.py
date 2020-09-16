import os,sys
from pprint import pprint
import tempfile
import json
from threading import Thread, Lock

from visitedHash import *

'''handle link list'''

class link_helper():
  def __init__(self):
    self.oper_lock = Lock()
    self.link_list = []

  def addLink(self, link_to_store):
    self.oper_lock.acquire()

    try:
      if checkVisitedLink(link_to_store):
        pass
      else:
        self.link_list.append(link_to_store)

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

  def getLink(self):
    result = ''

    self.oper_lock.acquire()

    try:
      result = self.link_list.pop(0)
      storeVisitedLink(result)

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

    return result

  def listLink(self):
    return self.link_list

  def linkCount(self):
    result=0

    try:
      self.oper_lock.acquire()
      result=len(self.link_list)

    except Exception as e:
      raise e
      print('error exit')

    finally:
      self.oper_lock.release()

    return result

  def helloworld(self):
    print('helloworld {}'.format(__file__))
