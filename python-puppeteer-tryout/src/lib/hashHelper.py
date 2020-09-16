import os,sys
from pprint import pprint
import tempfile
import json
from threading import Thread, Lock

'''handle visited hash'''

class hash_helper():
  def __init__(self):
    self.oper_lock = Lock()
    self.hash_list = []

  def storeHash(self, hash_to_store):
    self.oper_lock.acquire()

    try:
      self.hash_list.append(hash_to_store)

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

  def checkHashExist(self, hash_to_test):
    result = False
    self.oper_lock.acquire()

    try:
      result = hash_to_test in self.hash_list

    except Exception as e:
      print(e)

    finally:
      self.oper_lock.release()

    return result

  def listHash(self):
    return self.hash_list

  def getCount(self):
    return len(self.hash_list)

  def helloworld(self):
    print('helloworld {}'.format(__file__))
