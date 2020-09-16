import os,sys
from pprint import pprint
import tempfile
import json
from threading import Thread, Lock

'''handle visited link'''

class link_helper():
  def __init__(self):
    self.oper_lock = Lock()
    self.link_list = []

  def storeLink(self, link_to_store):
    self.oper_lock.acquire()

    try:
      self.link_list.append(link_to_store)

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

  def checkLinkExist(self, link_to_test):
    self.oper_lock.acquire()

    try:
      result = link_to_test in self.link_list

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

    return result

  def helloworld(self):
    print('helloworld {}'.format(__file__))
