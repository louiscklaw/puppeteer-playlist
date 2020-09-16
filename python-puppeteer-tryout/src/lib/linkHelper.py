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
    suppose_new_link = ''

    self.oper_lock.acquire()

    try:
      suppose_new_link = self.link_list.pop(0)

      # pop a link and assure the link havn't fetch before
      while len(self.link_list)>0 and checkVisitedLink(suppose_new_link):
        suppose_new_link = self.link_list.pop(0)

      if len(self.link_list) < 1:
        suppose_new_link=''
      else:
        print('findme')
        storeVisitedLink(suppose_new_link)

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

    return suppose_new_link

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
