import hashlib
m = hashlib.md5()

def getLinkHash(url):
  return hashlib.md5(bytes(url,encoding='utf8')).hexdigest()

def helloworld():
  print('helloworld {}'.format(__file__))
