//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var Extension = require('./Extension')
var ExtensionClient = Extension.Client
var ExtensionProcessor = Extension.Processor
var ttypes = require('./osquery_types');
//HELPER FUNCTIONS AND STRUCTURES

ExtensionManager_extensions_args = function(args) {
};
ExtensionManager_extensions_args.prototype = {};
ExtensionManager_extensions_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_extensions_args.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_extensions_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_extensions_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ExtensionManager_extensions_result.prototype = {};
ExtensionManager_extensions_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.MAP) {
        var _size28 = 0;
        var _rtmp332;
        this.success = {};
        var _ktype29 = 0;
        var _vtype30 = 0;
        _rtmp332 = input.readMapBegin();
        _ktype29 = _rtmp332.ktype;
        _vtype30 = _rtmp332.vtype;
        _size28 = _rtmp332.size;
        for (var _i33 = 0; _i33 < _size28; ++_i33)
        {
          var key34 = null;
          var val35 = null;
          key34 = input.readI64();
          val35 = new ttypes.InternalExtensionInfo();
          val35.read(input);
          this.success[key34] = val35;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_extensions_result.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_extensions_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.MAP, 0);
    output.writeMapBegin(Thrift.Type.I64, Thrift.Type.STRUCT, Thrift.objectLength(this.success));
    for (var kiter36 in this.success)
    {
      if (this.success.hasOwnProperty(kiter36))
      {
        var viter37 = this.success[kiter36];
        output.writeI64(kiter36);
        viter37.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_options_args = function(args) {
};
ExtensionManager_options_args.prototype = {};
ExtensionManager_options_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_options_args.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_options_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_options_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ExtensionManager_options_result.prototype = {};
ExtensionManager_options_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.MAP) {
        var _size38 = 0;
        var _rtmp342;
        this.success = {};
        var _ktype39 = 0;
        var _vtype40 = 0;
        _rtmp342 = input.readMapBegin();
        _ktype39 = _rtmp342.ktype;
        _vtype40 = _rtmp342.vtype;
        _size38 = _rtmp342.size;
        for (var _i43 = 0; _i43 < _size38; ++_i43)
        {
          var key44 = null;
          var val45 = null;
          key44 = input.readString();
          val45 = new ttypes.InternalOptionInfo();
          val45.read(input);
          this.success[key44] = val45;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_options_result.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_options_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.MAP, 0);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.success));
    for (var kiter46 in this.success)
    {
      if (this.success.hasOwnProperty(kiter46))
      {
        var viter47 = this.success[kiter46];
        output.writeString(kiter46);
        viter47.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_registerExtension_args = function(args) {
  this.info = null;
  this.registry = null;
  if (args) {
    if (args.info !== undefined) {
      this.info = args.info;
    }
    if (args.registry !== undefined) {
      this.registry = args.registry;
    }
  }
};
ExtensionManager_registerExtension_args.prototype = {};
ExtensionManager_registerExtension_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.info = new ttypes.InternalExtensionInfo();
        this.info.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size48 = 0;
        var _rtmp352;
        this.registry = {};
        var _ktype49 = 0;
        var _vtype50 = 0;
        _rtmp352 = input.readMapBegin();
        _ktype49 = _rtmp352.ktype;
        _vtype50 = _rtmp352.vtype;
        _size48 = _rtmp352.size;
        for (var _i53 = 0; _i53 < _size48; ++_i53)
        {
          var key54 = null;
          var val55 = null;
          key54 = input.readString();
          var _size56 = 0;
          var _rtmp360;
          val55 = {};
          var _ktype57 = 0;
          var _vtype58 = 0;
          _rtmp360 = input.readMapBegin();
          _ktype57 = _rtmp360.ktype;
          _vtype58 = _rtmp360.vtype;
          _size56 = _rtmp360.size;
          for (var _i61 = 0; _i61 < _size56; ++_i61)
          {
            var key62 = null;
            var val63 = null;
            key62 = input.readString();
            var _size64 = 0;
            var _rtmp368;
            val63 = [];
            var _etype67 = 0;
            _rtmp368 = input.readListBegin();
            _etype67 = _rtmp368.etype;
            _size64 = _rtmp368.size;
            for (var _i69 = 0; _i69 < _size64; ++_i69)
            {
              var elem70 = null;
              var _size71 = 0;
              var _rtmp375;
              elem70 = {};
              var _ktype72 = 0;
              var _vtype73 = 0;
              _rtmp375 = input.readMapBegin();
              _ktype72 = _rtmp375.ktype;
              _vtype73 = _rtmp375.vtype;
              _size71 = _rtmp375.size;
              for (var _i76 = 0; _i76 < _size71; ++_i76)
              {
                var key77 = null;
                var val78 = null;
                key77 = input.readString();
                val78 = input.readString();
                elem70[key77] = val78;
              }
              input.readMapEnd();
              val63.push(elem70);
            }
            input.readListEnd();
            val55[key62] = val63;
          }
          input.readMapEnd();
          this.registry[key54] = val55;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_registerExtension_args.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_registerExtension_args');
  if (this.info !== null && this.info !== undefined) {
    output.writeFieldBegin('info', Thrift.Type.STRUCT, 1);
    this.info.write(output);
    output.writeFieldEnd();
  }
  if (this.registry !== null && this.registry !== undefined) {
    output.writeFieldBegin('registry', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.MAP, Thrift.objectLength(this.registry));
    for (var kiter79 in this.registry)
    {
      if (this.registry.hasOwnProperty(kiter79))
      {
        var viter80 = this.registry[kiter79];
        output.writeString(kiter79);
        output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, Thrift.objectLength(viter80));
        for (var kiter81 in viter80)
        {
          if (viter80.hasOwnProperty(kiter81))
          {
            var viter82 = viter80[kiter81];
            output.writeString(kiter81);
            output.writeListBegin(Thrift.Type.MAP, viter82.length);
            for (var iter83 in viter82)
            {
              if (viter82.hasOwnProperty(iter83))
              {
                iter83 = viter82[iter83];
                output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(iter83));
                for (var kiter84 in iter83)
                {
                  if (iter83.hasOwnProperty(kiter84))
                  {
                    var viter85 = iter83[kiter84];
                    output.writeString(kiter84);
                    output.writeString(viter85);
                  }
                }
                output.writeMapEnd();
              }
            }
            output.writeListEnd();
          }
        }
        output.writeMapEnd();
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_registerExtension_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ExtensionManager_registerExtension_result.prototype = {};
ExtensionManager_registerExtension_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ExtensionStatus();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_registerExtension_result.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_registerExtension_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_deregisterExtension_args = function(args) {
  this.uuid = null;
  if (args) {
    if (args.uuid !== undefined) {
      this.uuid = args.uuid;
    }
  }
};
ExtensionManager_deregisterExtension_args.prototype = {};
ExtensionManager_deregisterExtension_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.uuid = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_deregisterExtension_args.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_deregisterExtension_args');
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.I64, 1);
    output.writeI64(this.uuid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_deregisterExtension_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ExtensionManager_deregisterExtension_result.prototype = {};
ExtensionManager_deregisterExtension_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ExtensionStatus();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_deregisterExtension_result.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_deregisterExtension_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_query_args = function(args) {
  this.sql = null;
  if (args) {
    if (args.sql !== undefined) {
      this.sql = args.sql;
    }
  }
};
ExtensionManager_query_args.prototype = {};
ExtensionManager_query_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.sql = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_query_args.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_query_args');
  if (this.sql !== null && this.sql !== undefined) {
    output.writeFieldBegin('sql', Thrift.Type.STRING, 1);
    output.writeString(this.sql);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_query_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ExtensionManager_query_result.prototype = {};
ExtensionManager_query_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ExtensionResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_query_result.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_query_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_getQueryColumns_args = function(args) {
  this.sql = null;
  if (args) {
    if (args.sql !== undefined) {
      this.sql = args.sql;
    }
  }
};
ExtensionManager_getQueryColumns_args.prototype = {};
ExtensionManager_getQueryColumns_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.sql = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_getQueryColumns_args.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_getQueryColumns_args');
  if (this.sql !== null && this.sql !== undefined) {
    output.writeFieldBegin('sql', Thrift.Type.STRING, 1);
    output.writeString(this.sql);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManager_getQueryColumns_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
ExtensionManager_getQueryColumns_result.prototype = {};
ExtensionManager_getQueryColumns_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.ExtensionResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ExtensionManager_getQueryColumns_result.prototype.write = function(output) {
  output.writeStructBegin('ExtensionManager_getQueryColumns_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ExtensionManagerClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(ExtensionManagerClient, ExtensionClient);
ExtensionManagerClient.prototype.seqid = function() { return this._seqid; }
ExtensionManagerClient.prototype.new_seqid = function() { return this._seqid += 1; }
ExtensionManagerClient.prototype.extensions = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_extensions();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_extensions();
  }
};

ExtensionManagerClient.prototype.send_extensions = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('extensions', Thrift.MessageType.CALL, this.seqid());
  var args = new ExtensionManager_extensions_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ExtensionManagerClient.prototype.recv_extensions = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ExtensionManager_extensions_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('extensions failed: unknown result');
};
ExtensionManagerClient.prototype.options = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_options();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_options();
  }
};

ExtensionManagerClient.prototype.send_options = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('options', Thrift.MessageType.CALL, this.seqid());
  var args = new ExtensionManager_options_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ExtensionManagerClient.prototype.recv_options = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ExtensionManager_options_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('options failed: unknown result');
};
ExtensionManagerClient.prototype.registerExtension = function(info, registry, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_registerExtension(info, registry);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_registerExtension(info, registry);
  }
};

ExtensionManagerClient.prototype.send_registerExtension = function(info, registry) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('registerExtension', Thrift.MessageType.CALL, this.seqid());
  var args = new ExtensionManager_registerExtension_args();
  args.info = info;
  args.registry = registry;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ExtensionManagerClient.prototype.recv_registerExtension = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ExtensionManager_registerExtension_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('registerExtension failed: unknown result');
};
ExtensionManagerClient.prototype.deregisterExtension = function(uuid, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_deregisterExtension(uuid);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deregisterExtension(uuid);
  }
};

ExtensionManagerClient.prototype.send_deregisterExtension = function(uuid) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deregisterExtension', Thrift.MessageType.CALL, this.seqid());
  var args = new ExtensionManager_deregisterExtension_args();
  args.uuid = uuid;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ExtensionManagerClient.prototype.recv_deregisterExtension = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ExtensionManager_deregisterExtension_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deregisterExtension failed: unknown result');
};
ExtensionManagerClient.prototype.query = function(sql, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_query(sql);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_query(sql);
  }
};

ExtensionManagerClient.prototype.send_query = function(sql) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('query', Thrift.MessageType.CALL, this.seqid());
  var args = new ExtensionManager_query_args();
  args.sql = sql;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ExtensionManagerClient.prototype.recv_query = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ExtensionManager_query_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('query failed: unknown result');
};
ExtensionManagerClient.prototype.getQueryColumns = function(sql, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getQueryColumns(sql);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getQueryColumns(sql);
  }
};

ExtensionManagerClient.prototype.send_getQueryColumns = function(sql) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getQueryColumns', Thrift.MessageType.CALL, this.seqid());
  var args = new ExtensionManager_getQueryColumns_args();
  args.sql = sql;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ExtensionManagerClient.prototype.recv_getQueryColumns = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ExtensionManager_getQueryColumns_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getQueryColumns failed: unknown result');
};
ExtensionManagerProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
Thrift.inherits(ExtensionManagerProcessor, ExtensionProcessor)
ExtensionManagerProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

ExtensionManagerProcessor.prototype.process_extensions = function(seqid, input, output) {
  var args = new ExtensionManager_extensions_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.extensions.length === 0) {
    Q.fcall(this._handler.extensions)
      .then(function(result) {
        var result = new ExtensionManager_extensions_result({success: result});
        output.writeMessageBegin("extensions", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ExtensionManager_extensions_result(err);
        output.writeMessageBegin("extensions", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.extensions( function (err, result) {
      var result = new ExtensionManager_extensions_result((err != null ? err : {success: result}));
      output.writeMessageBegin("extensions", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

ExtensionManagerProcessor.prototype.process_options = function(seqid, input, output) {
  var args = new ExtensionManager_options_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.options.length === 0) {
    Q.fcall(this._handler.options)
      .then(function(result) {
        var result = new ExtensionManager_options_result({success: result});
        output.writeMessageBegin("options", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ExtensionManager_options_result(err);
        output.writeMessageBegin("options", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.options( function (err, result) {
      var result = new ExtensionManager_options_result((err != null ? err : {success: result}));
      output.writeMessageBegin("options", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

ExtensionManagerProcessor.prototype.process_registerExtension = function(seqid, input, output) {
  var args = new ExtensionManager_registerExtension_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.registerExtension.length === 2) {
    Q.fcall(this._handler.registerExtension, args.info, args.registry)
      .then(function(result) {
        var result = new ExtensionManager_registerExtension_result({success: result});
        output.writeMessageBegin("registerExtension", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ExtensionManager_registerExtension_result(err);
        output.writeMessageBegin("registerExtension", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.registerExtension(args.info, args.registry,  function (err, result) {
      var result = new ExtensionManager_registerExtension_result((err != null ? err : {success: result}));
      output.writeMessageBegin("registerExtension", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

ExtensionManagerProcessor.prototype.process_deregisterExtension = function(seqid, input, output) {
  var args = new ExtensionManager_deregisterExtension_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deregisterExtension.length === 1) {
    Q.fcall(this._handler.deregisterExtension, args.uuid)
      .then(function(result) {
        var result = new ExtensionManager_deregisterExtension_result({success: result});
        output.writeMessageBegin("deregisterExtension", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ExtensionManager_deregisterExtension_result(err);
        output.writeMessageBegin("deregisterExtension", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.deregisterExtension(args.uuid,  function (err, result) {
      var result = new ExtensionManager_deregisterExtension_result((err != null ? err : {success: result}));
      output.writeMessageBegin("deregisterExtension", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

ExtensionManagerProcessor.prototype.process_query = function(seqid, input, output) {
  var args = new ExtensionManager_query_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.query.length === 1) {
    Q.fcall(this._handler.query, args.sql)
      .then(function(result) {
        var result = new ExtensionManager_query_result({success: result});
        output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ExtensionManager_query_result(err);
        output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.query(args.sql,  function (err, result) {
      var result = new ExtensionManager_query_result((err != null ? err : {success: result}));
      output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

ExtensionManagerProcessor.prototype.process_getQueryColumns = function(seqid, input, output) {
  var args = new ExtensionManager_getQueryColumns_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getQueryColumns.length === 1) {
    Q.fcall(this._handler.getQueryColumns, args.sql)
      .then(function(result) {
        var result = new ExtensionManager_getQueryColumns_result({success: result});
        output.writeMessageBegin("getQueryColumns", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new ExtensionManager_getQueryColumns_result(err);
        output.writeMessageBegin("getQueryColumns", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getQueryColumns(args.sql,  function (err, result) {
      var result = new ExtensionManager_getQueryColumns_result((err != null ? err : {success: result}));
      output.writeMessageBegin("getQueryColumns", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

