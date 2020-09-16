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

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

    return result

  def list_link():
    return self.link_list

  def helloworld(self):
    print('helloworld {}'.format(__file__))
