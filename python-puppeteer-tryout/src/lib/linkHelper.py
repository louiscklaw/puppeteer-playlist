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
    starting_link_count=self.link_list

    if len(self.link_list) > 0:

      self.oper_lock.acquire()

      try:
        suppose_new_link = self.link_list.pop(0)
        check_visited_link_result = checkVisitedLink(suppose_new_link)

        # # pop a link and assure the link havn't fetch before
        while len(self.link_list)>0 and check_visited_link_result:
          suppose_new_link = self.link_list.pop(0)
          check_visited_link_result = checkVisitedLink(suppose_new_link)

        # to see if new link and be found
        if check_visited_link_result:
          # cannot found new link in this run
          suppose_new_link=''
        else:
          # found new link in this run
          pass

        # print('store visited link', suppose_new_link)

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
