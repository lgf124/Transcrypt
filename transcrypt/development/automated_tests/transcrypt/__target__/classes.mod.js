import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, complex, __conj__, __Terminal__, __terminal__, print} from './org.transcrypt.__runtime__.mod.js';
var __name__ = 'classes';
export var run = function (autoTester) {
	autoTester.check ('<br>General<br>');
	var A = __class__ ('A', [object], {
		__module__: __name__,
		p: 123,
		get __init__ () {return __get__ (this, function (self, x) {
			self.x = x;
			autoTester.check (self.p);
		});},
		get show () {return __get__ (this, function (self, label) {
			autoTester.check ('A.show', label, self.x);
		});},
		get show2 () {return __get__ (this, function (self, label) {
			autoTester.check ('A.show2', label, self.x);
		});}
	});
	var B = __class__ ('B', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, y) {
			autoTester.check ('In B constructor');
			self.y = y;
			autoTester.check (self.p);
		});},
		get show () {return __get__ (this, function (self, label) {
			autoTester.check ('B.show', label, self.y);
		});}
	});
	var __left0__ = tuple ([456, 789]);
	B.p = __left0__ [0];
	B.q = __left0__ [1];
	var C = __class__ ('C', [A, B], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, x, y) {
			autoTester.check ('In C constructor');
			A.__init__ (self, x);
			B.__init__ (self, y);
		});},
		get show () {return __get__ (this, function (self, label) {
			A.show (self, label);
			B.show (self, label);
			autoTester.check ('C.show', label, self.x, self.y);
		});}
	});
	var a = A (1001);
	a.show ('america');
	autoTester.check (A.p);
	autoTester.check (a.p);
	var b = B (2002);
	b.show ('russia');
	autoTester.check (B.p);
	autoTester.check (b.p);
	autoTester.check (b.q);
	autoTester.check (A.p);
	autoTester.check (a.p);
	var c = C (3003, 4004);
	c.show ('netherlands');
	autoTester.check (C.p);
	autoTester.check (c.p);
	autoTester.check (c.q);
	c.show2 ('amsterdam');
	A.show2 (c, 'rotterdam');
	var show3 = c.show;
	show3 ('copy');
	autoTester.check (hasattr (a, 'x'));
	autoTester.check (hasattr (a, 'y'));
	autoTester.check (hasattr (a, 'p'));
	autoTester.check (hasattr (a, 'q'));
	autoTester.check ('<br><br>Augmented isinstance and issubclass<br>');
	var simpleTypes = tuple ([dict, list, A, B, C, bool, str, float, int, object]);
	var tupleTypes = tuple ([tuple ([dict, list]), tuple ([bool, int]), tuple ([bool, A]), tuple ([C, B]), tuple ([B, object])]);
	for (var [i, types] of enumerate (tuple ([simpleTypes, tupleTypes]))) {
		for (var [j, aType] of enumerate (types)) {
			for (var [k, anObject] of enumerate (tuple ([dict ({'a': 1}), list ([]), a, C, c, C, b, true, 'a', 1, 1.2]))) {
				autoTester.check (i, j, k, isinstance (anObject, aType));
				if (types == simpleTypes) {
					autoTester.check (i, j, k, isinstance (anObject, simpleTypes));
				}
			}
		}
	}
	for (var [i, types] of enumerate (tuple ([simpleTypes, tupleTypes]))) {
		for (var [j, aType] of enumerate (types)) {
			for (var [k, aClass] of enumerate (tuple ([dict, list, A, C, B, bool, str, int, float]))) {
				autoTester.check (i + 2, j, k, issubclass (aClass, aType));
				if (types == simpleTypes) {
					autoTester.check (i + 2, j, k, issubclass (aClass, simpleTypes));
				}
			}
		}
	}
	autoTester.check ('<br><br>Method resolution order<br>');
	var mro = function (aClass, result) {
		if (typeof result == 'undefined' || (result != null && result .hasOwnProperty ("__kwargtrans__"))) {;
			var result = null;
		};
		var last = 0;
		if (result === null) {
			var result = list ([aClass]);
			var last = 1;
		}
		for (var aBase of aClass.__bases__) {
			if (!(__in__ (aBase, result)) && aBase != object) {
				result.append (aBase);
				mro (aBase, result);
			}
		}
		if (last && __in__ (object, aClass.__bases__)) {
			aRoot.append (object);
		}
		return result;
	};
	autoTester.check ((function () {
		var __accu0__ = [];
		for (var aClass of mro (C)) {
			__accu0__.append (aClass.__name__);
		}
		return __accu0__;
	}) ());
};