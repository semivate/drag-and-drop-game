(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed,
      ),
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Symbol40 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D1C4E9")
      .s()
      .p(
        "EghoA16QhHAAgygzQgzgxAAhIIAA+vQAAgugXgoQgYgogngXIgEgCQgjgUgpgCQgpgDglAQQh1Axh/AAQkIAAi6i7Qi7i7AAkHQAAkIC7i7QC6i6EIAAQB9AAB3AxQAlAQApgCQApgDAjgTIAEgCQAngYAYgnQAXgpAAguIAA+vQAAhHAzgyQAygzBHAAIevAAQAuAAAogXQAogXAXgoIACgDQAUgkACgpQACgogQgmQgwh0AAiAQAAkHC6i7QC6i7EJAAQEHAAC7C7QC7C7AAEHQAAB+gxB2QgQAmADAoQABApAUAkIACADQAXAoAoAXQAoAXAuAAIewAAQBHAAAyAzQAzAzAABGMAAABU2QAABHgzAyQgyAzhHAAg",
      );
    this.shape.setTransform(51.282, 51.282, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol40,
    new cjs.Rectangle(0, 0, 102.6, 102.6),
    null,
  );

  (lib.Symbol39 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D1C4E9")
      .s()
      .p(
        "EgqbA16QhHAAgygzQgzgxAAhIIAA6UQAAhMA5gzQA3gzBMAGQAlADAmAAQCvAAChhEQCahCB3h2QB4h4BBibQBFigAAivQAAiwhFigQhBibh4h2Qh3h4iahBQihhEivAAQgfAAgsAEQhMAGg3gzQg5gzAAhMIAA6VQAAhHAzgyQAygzBHAAIevAAQAvAAAngXQAogXAXgoIACgDQAUgkADgpQACgogQgmQgxh0AAiAQAAkHC7i7QC7i7EHAAQEHAAC8C7QC6C7AAEHQAAB+gxB2QgPAmACAoQACApAUAkIACADQAXAoAoAXQAoAXAuAAIevAAQBHAAAzAzQAzAzAABGIAAaVQgBBMg4AzQg4AzhMgGQgrgEgfAAQivAAihBEQibBBh2B4Qh4B2hCCbQhDCggBCwQABCvBDCgQBCCbB4B4QB2B2CbBCQChBECvAAQAlAAAlgDQBMgGA4AzQA4AzABBMIAAaUQAABHgzAyQgzAzhHAAg",
      );
    this.shape.setTransform(42.92, 51.282, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol39,
    new cjs.Rectangle(0, 0, 85.9, 102.6),
    null,
  );

  (lib.Symbol38 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D1C4E9")
      .s()
      .p(
        "EgqbAtIQhGAAgzgzQgzgyAAhIIAA+uQABgugYgoQgXgogogYIgDgBQgkgUgpgDQgogCgmAQQh0Awh/AAQhUAAhLgTQjQg2iHiqQiHiugBjcQABjbCHitQCHirDQg1QBNgUBSgBQB9AAB2AxQAmARAogCQApgDAkgUIADgCQAogXAXgoQAYgogBguIAA+vQAAhHAzgzQAzgyBGAAIaVAAQBMAAAzA4QAzA4gGBLQgDAmAAAlQgBCvBFChQBBCbB3B3QB4B3CaBBQChBFCugBQCvABChhFQCahBB3h3QB4h3BBibQBEihAAivQAAgfgDgsQgGhLAzg4QAyg4BNAAIaUAAQBIAAAyAyQAyAzAABHIAAevQAAAuAYAoQAWAoApAXIADACQAjAUApADQAoACAmgRQB3gxB9AAQEHAAC7C8QC8C6AAEHQAAEIi8C7Qi7C7kHgBQh/AAh1gwQgmgQgoACQgpADgjAUIgDABQgpAYgWAoQgYAoAAAuIAAeuQAABHgyAzQgyAzhIAAg",
      );
    this.shape.setTransform(59.6878, 42.9022, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol38,
    new cjs.Rectangle(0, 0, 119.4, 85.9),
    null,
  );

  (lib.Symbol37 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D1C4E9")
      .s()
      .p(
        "EgpEAtIQhrAAhLhNQhNhLAAhrIAA3mQAAhrBNhLQBLhLBsABIADAAQCvgBCghEQCbhBB3h3QB4h3BBicQBEigAAivQAAiuhEihQhBiah4h3Qh3h4ibhCQighEivAAIgDABQhsAAhLhLQhNhKAAhsIAA3lQAAhsBNhLQBLhNBrABIXmAAQBrAABLBMQBLBMgBBrIAAADQABCvBDChQBCCbB4B3QB2B3CcBBQCgBFCugBQCvABChhFQCahBB3h3QB4h3BCibQBEihAAivIgBgDQAAhrBLhMQBKhMBrAAIXmAAQBsgBBLBNQBNBMgBBrIAAXlQAABshMBKQhMBLhrAAIgDgBQivAAihBEQiaBCh4B4Qh3B3hBCaQhFChABCuQgBCvBFCgQBBCcB3B3QB4B3CaBBQChBECvABIADAAQBrgBBMBLQBMBLAABrIAAXmQABBrhNBLQhLBNhsAAg",
      );
    this.shape.setTransform(42.9556, 42.9022, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol37,
    new cjs.Rectangle(0, 0, 85.9, 85.9),
    null,
  );

  (lib.Symbol36 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D1C4E9")
      .s()
      .p(
        "EgqaA16QhIAAgygzQgygxAAhIIAA+vQgBgugWgoQgYgogogXIgDgCQgkgUgogCQgpgDgmAQQh1Axh+AAQhUAAhMgUQjPg2iHiqQiIitABjcQgBjdCIisQCHiqDPg2QBOgUBSAAQB9AAB2AxQAmAQApgCQAogDAkgTIADgCQAogYAYgnQAWgpABguIAA+vQAAhHAygyQAygzBIAAIevAAQAuAAAngXQApgXAWgoIACgDQAVgkACgpQACgogQgmQgxh0AAiAQAAkHC8i7QC6i7EHAAQEHAAC8C7QC6C7AAEHQABB+gxB2QgRAmADAoQACApAUAkIACADQAXAoAoAXQAoAXAuAAIevAAQBHAAAzAzQAzAzAABGIAAevQAAAvAWAoQAYAnAnAYIADACQAkATApADQAoACAngQQB1gxB+AAQBRAABOAUQDQA2CGCqQCICsAADdQAADciICtQiGCqjQA2QhMAUhTAAQh/AAh0gxQgngQgoADQgpACgkAUIgDACQgnAXgYAoQgWAoAAAuIAAevQAABHgzAyQgzAzhHAAg",
      );
    this.shape.setTransform(59.7233, 51.282, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol36,
    new cjs.Rectangle(0, 0, 119.5, 102.6),
    null,
  );

  (lib.Symbol35 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D1C4E9")
      .s()
      .p(
        "EgpDAtIQhsAAhMhNQhLhLAAhrMAAAhSIQAAhsBLhLQBMhNBsABIXlAAQBrAABLBMQBKBMABBrIAAADQgBCvBFChQBBCbB3B3QB3B3CbBBQChBFCugBQCvABCghFQCbhBB4h3QB3h3BBibQBFihgBivIAAgDQAAhrBKhMQBMhMBrAAIXlAAQBrgBBNBNQBLBMABBrIAAXlQAABshNBKQhMBLhsAAIgCgBQiwAAifBEQicBCh2B4Qh4B3hCCaQhDChgBCuQABCvBDCgQBCCcB4B3QB2B3CcBBQCfBECwABIACAAQBsgBBMBLQBNBLAABrIAAXmQgBBrhLBLQhNBNhrAAg",
      );
    this.shape.setTransform(42.9911, 42.9022, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol35,
    new cjs.Rectangle(0, 0, 86, 85.9),
    null,
  );

  (lib.Symbol34 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B39DDB")
      .s()
      .p(
        "EAY5A16QhMAAgzg4Qgzg4AGhLQAEgsAAggQAAiuhEihQhCibh3h3Qh4h3iahCQihhEiuAAQiwAAigBEQibBCh2B3Qh4B3hBCbQhEChAACuQAAAmADAmQAHBLgzA4Qg0A4hLAAI6VAAQhHAAgygzQgzgyAAhHIAA+vQAAgugXgoQgYgogngXIgEgCQgjgUgpgCQgpgDglAQQh1Axh/AAQkIAAi6i7Qi7i6AAkIQAAkIC7i7QC6i6EIAAQB9AAB3AxQAlAQApgCQApgDAjgTIAEgCQAngYAYgoQAXgoAAguIAA+vQAAhHAzgyQAygzBHAAIevAAQAuAAAogXQAogXAXgoIACgDQAUgjACgqQACgogQgmQgwh1AAh+QAAkIC6i7QC6i7EJAAQEHAAC7C7QC7C7AAEIQAAB9gxB2QgQAmADAoQABAqAUAjIACADQAXAoAoAXQAoAXAuAAIewAAQBHAAAyAzQAzAzAABGMAAABU2QAABHgzAyQgyAzhHAAg",
      );
    this.shape.setTransform(51.282, 51.2998, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol34,
    new cjs.Rectangle(0, 0, 102.6, 102.7),
    null,
  );

  (lib.Symbol33 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B39DDB")
      .s()
      .p(
        "EAY5AtIQhMAAgzg5Qgzg4AGhLQAEgsAAgfQAAivhEihQhCiah3h4Qh4h3iahCQighEivAAQiwAAigBEQibBCh2B3Qh4B4hBCaQhEChAACvQAAAlADAmQAHBLgzA4QgzA5hNAAI6UAAQhHAAgygzQgzgyAAhIIAA+vQAAgugXgoQgYgogngXIgEgCQgjgUgpgCQgpgCglAQQh1Awh/AAQkIAAi6i6Qi7i7AAkIQAAkHC7i7QC6i7EIAAQB9AAB3AxQAlAQApgCQApgCAjgUIAEgCQAngXAYgoQAXgoAAguIAA+vQAAhIAzgyQAygzBHAAIaUAAQBNAAAzA5QAzA4gHBLQgDAmAAAlQAACvBECgQBBCbB4B4QB2B3CbBBQCgBECwAAQCvAACghEQCahBB4h3QB3h4BCibQBEigAAivQAAgfgEgsQgGhLAzg4QAzg5BMAAIaVAAQBHAAAyAzQAzAzAABHIAAaUQAABMg4AzQg5A0hLgHQgsgEgeAAQiwAAigBEQibBCh3B3Qh4B4hBCaQhEChAACuQAACvBECgQBBCbB4B4QB3B3CbBBQCgBECwAAQAkAAAmgDQBLgGA5AzQA4AzAABMIAAaUQAABIgzAyQgyAzhHAAg",
      );
    this.shape.setTransform(51.2998, 42.9237, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol33,
    new cjs.Rectangle(0, 0, 102.7, 85.9),
    null,
  );

  (lib.Symbol32 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B39DDB")
      .s()
      .p(
        "EgHBA7yQi7i7AAkIQAAh/Awh0QAQgmgCgoQgCgqgUgjIgCgDQgXgogogXQgogYguAAI+vAAQhIAAgygyQgzgzAAhHIAA6UQAAhMA5gzQA4gzBLAGQAmADAlAAQCvAAChhDQCahCB4h3QB3h4BCiaQBEihAAivQAAiuhEihQhCiah3h3Qh4h4iahCQihhEivABQgfgBgsAEQhLAHg4g0Qg5gzAAhMIAA6UQAAhHAzgzQAzgyBHAAIevAAQAuAAAogYQAogXAXgoIACgCQAUgkACgpQACgpgQglQgwh1AAh/QAAkIC7i7QC6i6EHAAQEIAAC7C6QC7C7AAEIQAAB9gxB3QgQAlACApQACApAUAkIACACQAXAoAoAXQAoAYAuAAIevAAQBIAAAyAyQAzAzAABHIAAaUQAABMg5AzQg4A0hLgHQgsgEgfABQivgBigBEQibBCh3B4Qh4B3hBCaQhEChAACuQAACvBEChQBBCaB4B4QB3B3CbBCQCgBDCvAAQAlAAAmgDQBLgGA4AzQA5AzAABMIAAaUQAABHgzAzQgyAyhIAAI+vAAQguAAgoAYQgoAXgXAoIgCADQgUAjgCAqQgCAoAQAmQAxB2AAB9QAAEIi7C7Qi7C7kIgBQkHABi6i7g",
      );
    this.shape.setTransform(42.9341, 59.67, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol32,
    new cjs.Rectangle(0, 0, 85.9, 119.4),
    null,
  );

  (lib.Symbol31 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B39DDB")
      .s()
      .p(
        "EgLRA1mQjQg1iGirQiIitAAjcQAAh/Awh1QAQgmgBgoQgDgpgUgjIgCgEQgXgogogXQgogXguAAI+vAAQhHAAgzgzQgygyAAhHIAA6UQAAhNA4gzQA4gzBMAHQAlADAlAAQCvAAChhEQCahBB4h3QB3h3BCibQBEigAAiwQAAivhEigQhCibh3h3Qh4h4iahBQihhEivAAQgeAAgsAEQhMAGg4gzQg4gzAAhMIAA6VQAAhHAygyQAzgzBHAAIaUAAQBMAAAzA4QA0A4gHBMQgDAlAAAlQAACwBECgQBCCbB3B3QB3B3CbBCQCgBECwAAQCuAAChhEQCbhCB2h3QB4h3BBibQBEigAAiwQAAgegEgsQgGhMAzg4QAzg4BMAAIaUAAQBIAAAzAzQAyAyAABHIAAevQAAAvAXAnQAXApAoAWIADADQAkATApADQAoACAmgQQB2gxB+AAQEHAAC7C7QC7C7AAEHQAAEJi7C6Qi7C6kHAAQiAAAh0gxQgmgQgoADQgpACgkAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgyAyQgzAzhIAAI+uAAQgvAAgoAXQgoAXgXAoIgCAEQgTAjgCApQgDAoAQAmQAxB3AAB9QAADciICtQiGCrjQA1QhLAUhTAAQhVAAhLgUg",
      );
    this.shape.setTransform(51.3258, 51.2902, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol31,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol30 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B39DDB")
      .s()
      .p(
        "EAQGAtHQhMAAgyg4Qgzg3AGhMQAEgsgBgfQAAivhDihQhCiah4h4Qh3h3iahBQihhEivgBQivABigBEQiaBBh3B3Qh4B4hCCaQhDChAACvQAAAlACAmQAHBMgzA3QgzA4hMAAI6UAAQhHAAgzgyQgygyAAhIIAA+uQAAgvgYgoQgXgngogYIgDgBQgjgUgqgDQgogCgmAQQh1Awh+AAQkIABi7i7Qi6i7AAkIQAAkHC6i7QC7i6EIAAQB9gBB2AxQAmAQAogBQAqgDAjgUIADgCQAogXAXgoQAYgoAAguIAA+vQAAhHAygzQAzgyBHAAIaUAAQBMgBAzA5QAzA4gHBMQgCAlAAAlQAACvBDCgQBCCbB4B4QB3B3CaBBQCgBECvABQCvgBChhEQCahBB3h3QB4h4BCibQBDigAAivQABgfgEgrQgGhMAzg4QAyg5BMABIaVAAQBHAAAzAyQAyAzAABHIAAevQAAAvAYAnQAXAoAoAXIACACQAkAUApADQApABAlgQQB3gxB9ABQEHAAC8C6QC6C7AAEHQAAEIi6C7Qi8C7kHgBQh/AAh1gwQglgQgpACQgpADgkAUIgCABQgoAYgXAnQgYAoAAAvIAAeuQAABHgyAzQgzAyhHAAg",
      );
    this.shape.setTransform(59.7233, 42.92, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol30,
    new cjs.Rectangle(0, 0, 119.5, 85.9),
    null,
  );

  (lib.Symbol29 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B39DDB")
      .s()
      .p(
        "EgCfA+YQjPg1iHirQiIitAAjcQAAh/Axh0QAQgmgCgoQgCgqgVgjIgCgDQgWgogpgXQgogYgtAAI+wAAQhGAAgzgyQgzgyAAhIMAAAhU1QAAhHAzgzQAzgyBGAAIY4AAQAvAAAogYQAogXAXgoIACgCQATgkADgpQACgpgQglQgwh1gBh/QAAkIC7i7QC7i6EIAAQEHAAC6C6QC8C7AAEIQgBB9gwB3QgRAlADApQACApAUAkIACACQAXAoAoAXQAoAYAuAAMAkmAAAQBHAAAzAyQAyAzABBHIAAaUQAABMg5AzQg4A0hLgHQgsgEgfABQiwgBigBEQiaBCh3B4Qh4B3hCCaQhDChAACuQAACvBDChQBCCaB4B4QB3B3CaBCQCgBDCwAAQAlAAAmgDQBLgGA4AzQA5AzAABMIAAaUQgBBHgyAzQgzAyhHAAI+vAAQguAAgoAYQgoAXgXAoIgCADQgUAjgCAqQgCAoAPAmQAyB2AAB9QAADciJCtQiGCrjQA1QhLAUhUAAQhTAAhMgUg",
      );
    this.shape.setTransform(42.9911, 59.67, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol29,
    new cjs.Rectangle(0, 0, 86, 119.4),
    null,
  );

  (lib.Symbol28 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9575CD")
      .s()
      .p(
        "EAQHA16QhNAAgzg4Qgzg4AHhMQADgrABgfQgBiwhEigQhBibh4h3Qh3h4ibhBQighEivAAQivAAigBEQibBBh2B4Qh4B3hCCbQhECgAACwQAAAmADAkQAHBMgzA4QgzA4hMAAI6UAAQhIAAgygzQgygyAAhHIAA6VQAAhLA3g0QA4gzBMAHQAlADAmAAQCvAAChhEQCahBB4h4QB3h3BBibQBFiggBiwQABivhFigQhBibh3h2Qh4h4iahBQihhEivAAQggAAgrADQhMAHg4gzQg3gzAAhMIAA6UQAAhIAygzQAygyBIAAIevAAQAuAAAngXQApgXAWgoIACgDQAUgkADgoQACgpgQgmQgwh1gBh/QAAhTAVhMQA1jPCqiGQCtiJDcAAQDcAACuCJQCpCGA2DPQAUBOAABRQABB+gxB2QgRAmADApQACAoAUAkIACADQAXAoAoAXQAoAXAuAAIevAAQBHAAAzAyQAzAzAABIMAAABU1QAABHgzAyQgzAzhHAAg",
      );
    this.shape.setTransform(42.9022, 51.3176, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol28,
    new cjs.Rectangle(0, 0, 85.9, 102.7),
    null,
  );

  (lib.Symbol27 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9575CD")
      .s()
      .p(
        "EgP0Ay/Qi7i7AAkIQAAh+Axh1QAQglgCgpQgDgpgUgkIgCgCQgXgogogYQgogXguAAI+vAAQhHAAgzgzQgygyAAhHIAA6UQAAhNA4gyQA4gzBMAGQAlADAmAAQCvAACghEQCbhCB3h3QB4h2BBibQBEigAAiwQAAivhEigQhBiah4h4Qh3h4ibhBQighEivAAQggAAgrAEQhMAGg4gzQg4gzAAhMIAA6UQAAhIAygzQAzgyBHAAIaVAAQBMAAAzA5QAzA4gHBLQgDAlAAAmQAACvBECgQBCCbB3B3QB3B4CbBBQCgBECwAAQCvAACghEQCbhBB2h4QB4h3BBibQBEigAAivQAAgfgDgsQgHhLAzg4QAzg5BMAAIaVAAQBHAAAzAyQAyAzAABIIAAeuQAAAvAXAoQAXAnAoAYIADACQAkATApADQAoACAmgQQB2gxB+AAQEHAAC7C7QC7C7AAEHQAAEIi7C7Qi7C6kHAAQh/AAh1gwQgmgRgoADQgpACgkAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgyAyQgzAzhHAAI+vAAQguAAgoAXQgoAYgXAoIgCACQgUAkgCApQgDApAQAlQAxB3AAB8QAAEIi6C7Qi7C7kHAAQkIAAi7i7g",
      );
    this.shape.setTransform(51.2865, 51.308, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol27,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol26 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9575CD")
      .s()
      .p(
        "EAHUA16QhMAAgzg4Qgzg4AHhMQADgrAAggQAAivhEigQhBibh4h3Qh2h4ibhBQighEivAAQiwAAigBEQibBBh3B4Qh3B3hCCbQhECgAACvQAAAmADAlQAHBMgzA4QgzA4hMAAI6VAAQhHAAgzgyQgygzAAhHIAA6VQAAhMA4gzQA4gzBMAHQAlADAmAAQCvAACghEQCbhCB3h3QB4h3BBibQBEigAAiwQAAivhEigQhBibh4h2Qh3h4ibhBQighEivAAQggAAgrADQhMAHg4gzQg4gzAAhMIAA6VQAAhHAygzQAzgyBHAAIevAAQAvAAAngXQAogXAXgoIACgDQAUgkADgpQACgogQgmQgxh1AAh/QAAkHC7i7QC7i7EIAAQEHAAC7C7QC6C7AAEHQAAB+gxB2QgQAmADAoQACApAUAkIACADQAXAoAoAXQAoAXAuAAIevAAQBHAAAzAyQAyAzAABHIAAevQAAAvAXAnQAXAoAoAXIADACQAkAUApADQAoACAmgQQB2gxB+AAQEHAAC7C6QC7C7AAEHQAAEIi7C7Qi7C7kHAAQh/AAh1gxQgmgQgoADQgpACgkAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgyAzQgzAyhHAAg",
      );
    this.shape.setTransform(51.3043, 51.3213, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol26,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol25 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9575CD")
      .s()
      .p(
        "EgHCA7yQi7i7AAkIQABh+Awh1QAQgmgCgpQgDgogTgkIgCgDQgYgogngYQgpgXgtABI+wAAQhHAAgygzQgygygBhHIAA+wQAAgtgWgpQgYgogogXIgDgCQgkgTgogCQgpgDgmAQQh1Awh+ABQkIgBi7i6Qi7i7AAkIQAAkGC7i7QC7i8EIAAQB9ABB2AwQAmARApgCQAogDAkgUIADgCQAogXAYgoQAWgoAAguIAA+vQABhIAygyQAygzBHAAIewAAQAuAAAogXQAngWAYgpIACgDQATgjADgpQACgogQgmQgwh1gBh/QAAkHC7i7QC7i8EHAAQEHAAC7C8QC8C7AAEHQgBB+gxB2QgQAmADAoQACApAUAjIACADQAXApAoAWQAoAXAuAAIevAAQBIAAAyAzQAzAzAABHIAAevQgBAvAYAnQAXAoAnAXIAEACQAjAUApADQAoACAmgRQB2gwB+gBQEHAAC7C8QC8C7AAEGQAAEIi8C7Qi7C6kHABQh/gBh1gwQgmgQgoADQgpACgjATIgEACQgnAXgXAoQgYApABAtIAAewQAABHgzAyQgyAzhIAAI+vAAQgugBgoAXQgoAYgXAoIgCADQgUAkgCAoQgDApAQAmQAxB2ABB9QAAEIi8C7Qi7C6kHABQkHgBi7i6g",
      );
    this.shape.setTransform(59.7056, 59.6878, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol25,
    new cjs.Rectangle(0, 0, 119.4, 119.4),
    null,
  );

  (lib.Symbol24 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9575CD")
      .s()
      .p(
        "EgHCA7yQi6i7AAkIQAAh+Awh1QAQgmgCgpQgCgogVgkIgBgDQgYgogngYQgogXgvABI+uAAQhHAAgzgzQgygyAAhHIAA6VQAAhMA4gzQA3gzBMAGQAmADAlABQCvAACghFQCbhBB4h3QB3h4BBibQBFigAAivQAAiuhFihQhBiah3h4Qh4h3ibhBQighEivgBQgfABgsADQhMAHg3g0Qg4gyAAhNIAA6UQAAhIAygyQAzgzBHAAIeuAAQAvAAAogXQAngWAYgpIABgDQAVgjACgpQACgogQgmQgwh1AAh/QAAkHC6i7QC7i8EHAAQEHAAC8C8QC6C7AAEHQAAB+gwB2QgQAmACAoQACApAUAjIACADQAXApAoAWQAoAXAuAAIevAAQBHAAAzAzQAyAzAABHIAAaUQABBNg5AyQg4A0hMgHQgrgDgfgBQivABigBEQicBBh3B3Qh3B4hBCaQhFChAACuQAACvBFCgQBBCbB3B4QB3B3CcBBQCgBFCvAAQAlgBAlgDQBMgGA4AzQA5AzgBBMIAAaVQAABHgyAyQgzAzhHAAI+vAAQgugBgoAXQgoAYgXAoIgCADQgUAkgCAoQgCApAQAmQAwB2AAB9QAAEIi6C7Qi8C6kHABQkHgBi7i6g",
      );
    this.shape.setTransform(42.9733, 59.6878, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol24,
    new cjs.Rectangle(0, 0, 86, 119.4),
    null,
  );

  (lib.Symbol23 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9575CD")
      .s()
      .p(
        "EABdAtIQhMgBgyg4Qgzg4AGhLQAEgsAAgfQAAivhEihQhBiah4h3Qh3h4ibhCQighEivABQiwgBigBEQibBCh3B4Qh3B3hCCaQhEChAACvQAAAmADAlQAHBLg0A4QgzA4hMABI0dAAQhHAAgzgzQgygyAAhHMAAAhU2QAAhIAygyQAzgzBHAAIUdAAQBMABAzA4QA0A4gHBMQgDAlAAAlQAACwBECfQBCCcB3B3QB3B3CbBBQCgBECwAAQCvAACghEQCbhBB3h3QB4h3BBicQBEifAAiwQAAgfgEgrQgGhMAzg4QAyg4BMgBMAgMAAAQBHAAAzAzQAyAzAABHIAAevQAAAvAXAnQAXAoAoAXIADACQAjAUAqADQAoACAmgRQB2gwB9gBQEIAAC7C8QC7C7AAEGQAAEIi7C7Qi7C6kIABQh/gBh0gwQgmgQgoADQgqACgjATIgDACQgoAXgXAoQgXApAAAtIAAewQAABHgyAyQgzAzhHAAg",
      );
    this.shape.setTransform(51.3613, 42.9378, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol23,
    new cjs.Rectangle(0, 0, 102.7, 85.9),
    null,
  );

  (lib.Symbol22 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7E57C2")
      .s()
      .p(
        "EARfAtHQhsABhLhNQhKhLAAhsIABgDQgBivhEihQhBiah4h4Qh3h3ibhBQighFivABQivgBigBFQibBBh2B3Qh4B4hCCaQhEChAACvIAAADQAABshKBLQhLBNhrgBI3mAAQhrABhLhNQhNhLABhrIAA3mQgBhrBNhLQBLhKBsAAIADAAQCvAAChhEQCahCB4h3QB3h4BBiaQBFiggBiwQABiuhFigQhBibh3h3Qh4h4iahCQihhDivgBIgDABQhsAAhLhKQhNhMABhrIAA3lQgBhsBNhLQBLhNBrAAIXmAAQBrABBLBMQBKBMAABrIAAADQAACvBECgQBCCcB4B3QB2B3CbBBQCgBECvAAQCvAACghEQCbhBB3h3QB4h3BBicQBEigABivIgBgDQAAhrBKhMQBLhMBsgBIXlAAQBrAABMBNQBNBMAABrMAAABSIQAABrhNBLQhLBNhsgBg",
      );
    this.shape.setTransform(42.9022, 42.9556, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol22,
    new cjs.Rectangle(0, 0, 85.9, 85.9),
    null,
  );

  (lib.Symbol21 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7E57C2")
      .s()
      .p(
        "EgP0AzAQi7i8AAkHQAAh/Axh0QAPgngCgoQgCgpgUgkIgCgDQgXgogogXQgogXguAAI+vAAQhHAAgygyQgzgzAAhHIAA6VQAAhLA4g0QA4gzBMAHQAlADAlAAQCvAAChhEQCbhBB3h4QB3h2BCibQBEigAAivQAAivhEihQhCibh3h3Qh3h3ibhCQihhEivAAQgfAAgrADQhMAIg4g0Qg4gzAAhMIAA6VQAAhHAzgzQAygyBHAAIaUAAQBNAAAzA4QAzA4gHBNQgDAkAAAlQAACwBECgQBBCbB4B4QB3B3CbBBQCgBECvAAQCwAACghEQCahBB3h3QB3h4BCibQBEigAAiwQAAgegEgrQgGhNAzg4QAzg4BMAAIaVAAQBHAAAyAyQAzA0AABGIAAevQAAAvAXAnQAXAoAoAXIADACQAkAVAoACQApACAmgQQB2gxB+AAQDbAACuCJQCqCFA1DQQAVBOAABSQAABSgVBNQg1DQiqCGQiuCHjbAAQh/AAh1gxQgmgPgpACQgoACgkAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgzAzQgyAyhHAAI+wAAQgtAAgpAXQgnAXgYAoIgCADQgTAkgCApQgDAoAQAnQAxB1AAB+QAAEHi6C8Qi7C6kIAAQkIAAi6i6g",
      );
    this.shape.setTransform(51.2902, 51.3258, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol21,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol20 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7E57C2")
      .s()
      .p(
        "EAQGAtIQhLAAg0g4Qgzg4AHhNQAEgqAAggQAAivhFihQhBiah4h4Qh3h3ibhBQighEivAAQivAAigBEQiaBBh4B3Qh3B4hBCaQhEChgBCvQAAAmADAkQAIBNg0A4QgzA4hMAAI6VAAQhGAAgzgzQgzgyAAhHIAA+wQAAgtgXgoQgXgpgogWIgDgCQgjgVgpgCQgpgCgmAQQh0Axh/AAQkIAAi6i7Qi8i7AAkIQAAkHC8i7QC6i7EIAAQB9AAB2AyQAmAPApgCQApgCAjgUIADgCQAogXAXgoQAXgoAAguIAA+vQAAhHAzgzQAzgyBGgBIaVAAQBMAAAzA5QA0A4gIBMQgDAlAAAlQABCvBEChQBBCaB3B4QB4B3CaBCQCgBDCvAAQCvAACghDQCbhCB3h3QB4h4BBiaQBFihAAivQAAgfgEgrQgHhMAzg4QA0g5BLAAIaVAAQBIABAyAyQAzAzAABHIAAevQgBAuAXAoQAXAoAoAXIADACQAkAUApACQAoACAngPQB1gyB+AAQEHAAC8C7QC7C7AAEHQAAEIi7C7Qi8C7kHAAQh/AAh0gxQgngQgoACQgpACgkAVIgDACQgoAWgXApQgXAoABAtIAAewQAABGgzAzQgyAzhIAAg",
      );
    this.shape.setTransform(59.6878, 42.9556, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol20,
    new cjs.Rectangle(0, 0, 119.4, 85.9),
    null,
  );

  (lib.Symbol19 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7E57C2")
      .s()
      .p(
        "EAQHA16QhNAAgzg4Qgyg4AGhMQADgrABggQgBivhEigQhBiah3h4Qh4h4ibhBQighEivAAQiuAAigBEQicBBh3B4Qh3B4hBCaQhFCgAACvQAAAmAEAlQAGBMgzA4QgzA4hMAAI6VAAQhHAAgygyQgygzgBhHIAA6VQAAhLA4g0QA5gzBLAHQAlADAmAAQCvAAChhEQCahBB3h4QB4h3BCibQBDigAAivQAAivhDihQhCibh4h2Qh3h3iahCQihhEivAAQggAAgrADQhMAIg4g0Qg4gzAAhMIAA6VQABhHAygzQAygyBHAAIewAAQAuAAAogXQAngXAYgoIACgDQATgkADgpQACgogQgmQgwh0gBh/QAAkIC7i7QC7i7EHAAQEHAAC7C7QC8C7AAEIQgBB9gxB2QgQAmADAoQACApAUAkIACADQAXAoAoAXQAoAXAuAAIevAAQBIAAAyAyQAzA0AABGIAAaVQgBBMg4AzQg4A0hMgIQgrgDgfAAQiwAAigBEQiaBCh4B3Qh3B2hBCbQhEChAACvQAACvBECgQBBCbB3B3QB4B4CaBBQCgBECwAAQAmAAAkgDQBMgHA4AzQA4A0ABBLIAAaVQAABHgzAzQgyAyhIAAg",
      );
    this.shape.setTransform(42.9556, 51.3354, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol19,
    new cjs.Rectangle(0, 0, 85.9, 102.7),
    null,
  );

  (lib.Symbol18 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7E57C2")
      .s()
      .p(
        "EAQGA16QhMAAgyg4Qgzg4AGhLQAEgsgBggQAAivhDigQhCiah4h4Qh3h4iahBQihhEivAAQivAAigBEQiaBBh3B4Qh4B4hCCaQhDCgAACvQAAAmACAmQAHBLgzA4QgzA4hMAAI6UAAQhHAAgzgyQgygzAAhHIAA+vQAAgugYgoQgXgogogXIgDgCQgjgUgqgCQgogCgmAPQh1Axh+AAQkIAAi7i6Qi6i8AAkHQAAkIC6i7QC7i6EIAAQB9AAB3AxQAlAQAogCQAqgCAjgVIADgCQAogXAXgoQAYgnAAgvIAA+vQAAhHAygzQAzgyBHAAIeuAAQAvAAAogXQAngXAYgoIABgDQAVgkACgpQACgogQgmQgwh0AAh/QAAkIC6i7QC7i7EHAAQEHAAC8C7QC6C7AAEIQAAB9gwB2QgQAmACAoQACApAUAkIACADQAXAoAoAXQAoAXAuAAIevAAQBHAAAzAyQAyA0AABGIAAevQAAAvAYAnQAXAoAoAXIACACQAkAVApACQAoACAmgQQB3gxB9AAQEHAAC8C6QC6C7AAEIQAAEHi6C8Qi8C6kHAAQh/AAh1gxQglgPgpACQgpACgkAUIgCACQgoAXgXAoQgYAoAAAuIAAevQAABHgyAzQgzAyhHAAg",
      );
    this.shape.setTransform(59.7233, 51.3354, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol18,
    new cjs.Rectangle(0, 0, 119.5, 102.7),
    null,
  );

  (lib.Symbol17 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7E57C2")
      .s()
      .p(
        "EgM5A7yQi7i7AAkIQABh/Awh0QAQgmgCgpQgDgpgTgjIgCgDQgXgogogXQgpgYguABI44AAQhGAAgzgzQgzgyAAhHMAAAhU2QAAhHAzgzQAzgyBGgBIY4AAQAvAAAogWQAogXAXgoIACgEQATgjADgpQACgpgQgmQgwh0gBh/QAAkIC7i7QC7i7EIAAQEHAAC6C7QC8C7AAEIQgBB9gwB2QgRAmADApQACApAUAjIACAEQAXAoAoAXQAoAWAuAAMAkmAAAQBHABAzAyQAyAzABBHIAAaVQAABLg5A0Qg4AzhLgHQgsgEgfAAQiwAAigBFQiaBBh3B3Qh4B4hCCbQhDCgAACuQAACwBDCfQBCCcB4B3QB3B3CaBBQCgBECwABQAlgBAmgCQBLgHA4AzQA5AzAABMIAAaVQgBBGgyAzQgzAzhHAAMgkmAAAQgugBgoAYQgoAXgXAoIgCADQgUAjgCApQgDApARAmQAwB2ABB9QAAEIi8C7Qi6C7kHAAQkIAAi7i7g",
      );
    this.shape.setTransform(42.9911, 59.7056, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol17,
    new cjs.Rectangle(0, 0, 86, 119.4),
    null,
  );

  (lib.Symbol16 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#673AB7")
      .s()
      .p(
        "EgG/A7uQi8i8AAkHQAAiAAyh0QAPgmgCgoQgCgpgVgkIgBgDQgXgogogWQgpgYguAAI+wAJQhIgBgygyQgygzAAhHIAA6VQAAhLA3gzQA5gzBLAGQAkAEAngBQCvABCghEQCbhCB3h3QB4h4BBiaQBFihAAivQAAiuhFigQhBibh4h3Qh3h4ibhBQighEivgBQglAAgmADQhLAIg5g0Qg3gzAAhMIAA6UQgBhIAzgyQAygzBIAAIevAAQAuAAAogWQAogYAXgoIACgDQAUgjACgpQADgpgRgmQgxh2AAh9QAAjcCIitQCGirDRg1QBPgUBPAAQBRAABPAUQDPA1CHCrQCICtAADcQgBB+gwB1QgQAmACApQACApAUAjIACADQAXAoApAYQAnAWAuAAIevAAQBIAAAyAzQAyAyAABIMAAABU1QAABHgyAzQgyAyhIABI+tgJQguAAgoAYQgoAWgXAoIgCADQgUAkgCApQgDAoARAmQAwB3AAB9QAAEHi6C8Qi8C6kHAAQkHAAi6i6g",
      );
    this.shape.setTransform(42.9311, 59.6349, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol16,
    new cjs.Rectangle(0, 0, 85.9, 119.3),
    null,
  );

  (lib.Symbol15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#673AB7")
      .s()
      .p(
        "EgP0Ay/Qi7i7AAkHQAAh/Axh1QAPgmgCgoQgCgpgUgjIgCgEQgXgogogXQgogXguAAI+vAAQhHAAgygzQgzgxAAhIIAA6UQAAhNA4gzQA4gzBMAHQAlADAlAAQCvAAChhEQCbhBB3h3QB3h3BCibQBEigAAiwQAAivhEigQhCiah3h4Qh3h4ibhBQihhEivAAQgfAAgrAEQhMAGg4gzQg4gzAAhMIAA6VQAAhHAzgyQAygzBHAAIaUAAQBNAAAzA4QAzA5gHBLQgDAmAAAkQAACwBECgQBBCbB4B3QB3B3CbBCQCgBECvAAQCwAACghEQCahCB3h3QB3h3BCibQBEigAAiwQAAgfgEgrQgGhLAzg5QAzg4BMAAIaVAAQBHAAAyAzQAzAzAABGIAAewQAAAuAXAnQAXApAoAWIADADQAkATAoADQApACAmgQQB2gxB+AAQEHAAC7C7QC7C7AAEHQAAEJi7C6Qi7C6kHAAQh/AAh1gxQgmgQgpADQgoACgkAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgzAyQgyAzhHAAI+wAAQgtAAgpAXQgnAYgYAnIgCAEQgTAjgCApQgDAoAQAmQAxB3AAB9QAAEHi6C7Qi7C7kIAAQkIAAi6i7g",
      );
    this.shape.setTransform(51.2902, 51.3435, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol15,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#673AB7")
      .s()
      .p(
        "EgHBAy/Qi8i7AAkHQAAh/Axh1QAQgmgCgoQgCgpgVgjIgCgEQgWgogpgXQgogXgtAAI+wAAQhGAAgzgzQgzgxAAhIIAA+vQAAgugXgoQgXgogogXIgDgCQgjgUgpgCQgpgDgmAQQh0Axh/AAQkIAAi6i6Qi8i6AAkJQAAkHC8i7QC6i7EIAAQB9AAB2AxQAmAQApgCQApgDAjgTIADgDQAogWAXgpQAXgoAAgtIAA+wQAAhHAzgyQAzgzBGAAIaVAAQBMAAAzA4QA0A5gIBLQgDAmAAAkQABCwBECgQBBCbB3B3QB4B3CaBCQCgBECvAAQCvAACghEQCbhCB3h3QB4h3BBibQBFigAAiwQAAgfgEgrQgHhLAzg5QA0g4BLAAIaVAAQBIAAAyAzQAzAzAABGIAAewQgBAuAXAnQAXApAoAWIADADQAkATApADQAoACAngQQB1gxB+AAQEHAAC8C7QC7C7AAEHQAAEJi7C6Qi8C6kHAAQh/AAh0gxQgngQgoADQgpACgkAUIgDACQgoAXgXAoQgXAoABAuIAAevQAABHgzAyQgyAzhIAAI+vAAQguAAgoAXQgoAYgXAnIgCAEQgUAjgCApQgCAoAPAmQAyB3AAB9QAAEHi7C7Qi7C7kIAAQkHAAi6i7g",
      );
    this.shape.setTransform(59.6878, 51.3435, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol14,
    new cjs.Rectangle(0, 0, 119.4, 102.7),
    null,
  );

  (lib.Symbol13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#673AB7")
      .s()
      .p(
        "EAReAtHQhrAAhLhLQhKhNAAhrIABgDQgBivhEigQhBibh3h4Qh4h3ibhBQighFivAAQiuAAigBFQicBBh3B3Qh3B4hBCbQhFCgAACvIAAADQAABrhKBNQhLBLhrAAI3mAAQhrAAhLhLQhNhMAAhsIAA3lQAAhrBNhLQBLhKBsgBIADAAQCvAAChhDQCahCB3h3QB4h4BCiaQBDihAAivQAAiuhDihQhCiah4h3Qh3h4iahCQihhDivAAIgDAAQhsAAhLhLQhNhKAAhsIAA3lQAAhrBNhNQBLhMBrABIXmAAQBrAABLBMQBKBMAABsIAAACQAACvBFCgQBBCcB3B3QB3B3CcBBQCgBFCuAAQCvAACghFQCbhBB4h3QB3h3BBicQBEigABivIgBgCQAAhsBKhMQBLhMBrAAIXmAAQBsgBBMBMQBLBNABBrIAAXlQAABshNBKQhMBLhsAAIgCAAQiwAAigBDQiaBCh4B4Qh3B3hBCaQhEChAACuQAACvBEChQBBCaB3B4QB4B3CaBCQCgBDCwAAIACAAQBsABBMBKQBNBLAABrIAAXlQgBBrhLBNQhMBLhsAAg",
      );
    this.shape.setTransform(42.9556, 42.9733, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol13,
    new cjs.Rectangle(0, 0, 85.9, 86),
    null,
  );

  (lib.Symbol12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#673AB7")
      .s()
      .p(
        "EAHUA16QhMAAgzg4Qgzg4AGhLQAEgsAAgfQAAivhEihQhCibh3h3Qh3h3iahCQighEiwAAQivAAigBEQibBCh3B3Qh4B3hBCbQhEChAACvQAAAlADAmQAHBLgzA4QgzA4hNAAI6UAAQhHAAgygzQgzgxAAhIIAA6UQAAhNA4gzQA4gzBLAHQAmADAlAAQCvAAChhEQCbhBB3h3QB3h4BCibQBEigAAivQAAiwhEigQhCiah3h3Qh3h4ibhBQihhEivAAQgfAAgsAEQhLAGg4gzQg4gzAAhMIAA6VQAAhHAzgyQAygzBHAAIevAAQAvAAAngXQAogXAXgoIACgDQAUgkACgoQACgpgPgmQgxh1AAh/QAAkHC7i7QC6i7EIAAQEIAAC7C7QC6C7AAEHQAAB+gxB2QgQAmADApQACAoATAkIADADQAWAoApAXQAnAXAuAAIewAAQBHAAAyAzQAzAzAABGIAAewQAAAuAXAnQAXApAoAWIADADQAkATAoADQApACAmgQQB2gxB+AAQEHAAC7C6QC7C7AAEIQAAEIi7C6Qi7C7kHAAQh/AAh1gxQgmgQgpADQgoACgkAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgzAyQgyAzhHAAg",
      );
    this.shape.setTransform(51.3435, 51.3531, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol12,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#673AB7")
      .s()
      .p(
        "EABdA16QhMAAgyg4Qgzg4AGhLQAEgsAAgfQAAivhEihQhBibh4h3Qh3h3ibhCQighEivAAQiwAAigBEQibBCh3B3Qh3B3hCCbQhEChAACvQAAAlADAmQAHBLg0A4QgzA4hMAAI0dAAQhHAAgzgzQgygxAAhIMAAAhU2QAAhHAygyQAzgzBHAAIY4AAQAuAAAogXQAogXAXgoIACgDQAUgkADgoQABgpgQgmQgwh1AAh/QAAkHC7i7QC6i7EJAAQEHAAC7C7QC7C7AAEHQAAB+gxB2QgQAmADApQACAoATAkIACADQAXAoAoAXQAoAXAvAAMAklAAAQBHAAAzAzQAyAzAABGIAAewQAAAuAXAnQAXApAoAWIADADQAjATAqADQAoACAlgQQB3gxB9AAQEIAAC7C6QC7C7AAEIQAAEIi7C6Qi7C7kIAAQh/AAh0gxQgmgQgoADQgqACgjAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgyAyQgzAzhHAAg",
      );
    this.shape.setTransform(51.3613, 51.3531, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol11,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#5E35B1")
      .s()
      .p(
        "EARfAtIQhsgBhLhLQhKhNAAhrIABgDQgBivhEigQhBibh4h3Qh3h4ibhCQighDivgBQivABigBDQibBCh2B4Qh4B3hCCbQhECgAACvIAAADQAABrhKBNQhLBLhrABI3mAAQhrgBhLhLQhNhMABhsIAA3lQgBhrBNhLQBLhLBsAAIADAAQCvABChhFQCahBB4h3QB3h3BBicQBFiggBivQABiuhFihQhBiah3h4Qh4h3iahBQihhFivABIgDAAQhsAAhLhLQhNhKABhrIAA3mQgBhrBNhNQBLhLBrAAMBSIAAAQBrAABMBLQBNBNAABrMAAABSHQAABrhNBNQhLBLhsABg",
      );
    this.shape.setTransform(42.9022, 42.9911, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol10,
    new cjs.Rectangle(0, 0, 85.9, 86),
    null,
  );

  (lib.Symbol9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#5E35B1")
      .s()
      .p(
        "EgHCAy/Qi6i6AAkJQAAh+Awh1QAQglgCgpQgDgpgUgkIgBgCQgYgogogYQgngXgvAAI+uAAQhIAAgygyQgygzAAhHIAA+vQAAgugYgoQgXgogogXIgDgCQgjgUgqgCQgogCgmAQQh1Awh+AAQkIAAi7i6Qi6i6AAkJQAAkHC6i7QC7i7EIAAQB9AAB2AxQAmAQAogCQAqgDAjgTIADgCQAogXAXgoQAYgoAAgvIAA+uQAAhIAygzQAygyBIAAMBU1AAAQBHAAAzAyQAyAzAABIIAAeuQAAAvAYAoQAWAoApAXIACACQAkATApADQApACAlgQQB3gxB9AAQDcAACtCJQCqCFA2DRQAVBNgBBRQABBSgVBOQg2DQiqCGQitCHjcAAQh/AAh1gwQglgQgpACQgpACgkAUIgCACQgpAXgWAoQgYAoAAAuIAAevQAABHgyAzQgzAyhHAAI+vAAQguAAgoAXQgoAYgXAoIgCACQgUAkgCApQgCApAQAlQAwB3AAB8QAAEJi6C6Qi8C7kHAAQkHAAi7i7g",
      );
    this.shape.setTransform(59.67, 51.3613, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol9,
    new cjs.Rectangle(0, 0, 119.4, 102.7),
    null,
  );

  (lib.Symbol8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#5E35B1")
      .s()
      .p(
        "EgHBAy/Qi8i7AAkHQAAiAAxh0QAQgmgCgpQgCgogVgkIgCgDQgWgogpgXQgngXguAAI+wAAQhGAAgzgzQgzgyAAhHIAA6VQAAhMA4gzQA4gzBNAGQAqAEAgAAQCvAACghEQCbhBB4h4QB3h3BBiaQBEigAAivQAAiwhEigQhBibh3h3Qh4h3ibhCQighEivAAQglAAglADQhNAHg4g0Qg4gyAAhNIAA6UQAAhHAzgyQAzgzBGAAMBU2AAAQBIAAAyAzQAzAyAABHIAAaUQgBBNg4AyQg4A0hMgHQglgDglAAQiwAAigBEQiaBCh3B3Qh4B3hCCbQhECgABCwQgBCvBECgQBCCaB4B3QB3B4CaBBQCgBECwAAQAfAAArgEQBMgGA4AzQA4AzABBMIAAaVQAABHgzAyQgyAzhIAAI+vAAQguAAgoAXQgoAXgXAoIgCADQgUAkgCAoQgCApAPAmQAyB2AAB+QAAEHi7C7Qi7C7kIAAQkHAAi6i7g",
      );
    this.shape.setTransform(42.9378, 51.3188, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol8,
    new cjs.Rectangle(0, 0, 85.9, 102.7),
    null,
  );

  (lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#5E35B1")
      .s()
      .p(
        "EgP0Ay/Qi7i6AAkJQAAh+Awh1QAQglgBgpQgDgpgUgkIgCgCQgXgogogYQgogXguAAI+vAAQhHAAgzgyQgygzAAhHIAA6UQAAhMA4gzQA4gzBMAGQAlADAlAAQCvAAChhEQCahCB4h3QB3h2BCibQBEigAAiwQAAivhEigQhCibh3h3Qh4h4iahBQihhEivAAQgfAAgrAEQhMAGg4gzQg4gzAAhMIAA6UQAAhIAygzQAzgyBHAAMBU1AAAQBIAAAzAyQAyAzAABIIAAeuQAAAvAXAoQAXAoAoAXIADACQAkATApADQAoACAmgQQB2gxB+AAQEHAAC7C7QC7C7AAEHQAAEJi7C6Qi7C6kHAAQiAAAh0gwQgmgQgoACQgpACgkAUIgDACQgoAXgXAoQgXAoAAAuIAAevQAABHgyAzQgzAyhIAAI+uAAQgvAAgoAXQgoAYgXAoIgCACQgTAkgCApQgDApAQAlQAxB3AAB8QAAEJi6C6Qi7C7kHAAQkJAAi6i7g",
      );
    this.shape.setTransform(51.3258, 51.3613, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol4,
    new cjs.Rectangle(0, 0, 102.7, 102.7),
    null,
  );

  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#5E35B1")
      .s()
      .p(
        "EAQGAtIQhMAAgyg5Qgzg4AGhLQAEgsgBgfQAAivhDihQhCiah4h4Qh3h3iahCQihhEivAAQivAAigBEQiaBCh3B3Qh4B4hCCaQhDChAACvQAAAlACAmQAHBLgzA4QgzA5hMAAI6UAAQhHAAgzgzQgygyAAhIIAA+vQAAgugYgoQgXgogogXIgDgCQgjgUgqgCQgogCgmAQQh1Awh+AAQkIAAi7i6Qi6i7AAkIQAAkHC6i7QC7i7EIAAQB9AAB2AxQAmAQAogCQAqgCAjgUIADgCQAogXAXgoQAYgoAAguIAA+vQAAhIAygyQAzgzBHAAMBU1AAAQBHAAAzAzQAyAzAABHIAAevQAAAuAYAoQAXAoAoAXIACACQAkAUApACQApACAlgQQB3gxB9AAQEHAAC8C7QC6C7AAEHQAAEIi6C7Qi8C6kHAAQh/AAh1gwQglgQgpACQgpACgkAUIgCACQgoAXgXAoQgYAoAAAuIAAevQAABIgyAyQgzAzhHAAg",
      );
    this.shape.setTransform(59.7233, 42.9948, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol3,
    new cjs.Rectangle(0, 0, 119.5, 86),
    null,
  );

  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#5E35B1")
      .s()
      .p(
        "EALnAtIQhqAAhMhNQhKhLAAhsIABgDQgBivhEihQhBiah3h3Qh4h4iahCQighDivAAQivAAigBDQicBCh3B4Qh3B3hBCaQhFChAACvIAAADQAABshKBLQhLBNhrAAIxyAAQhpAAhMhMQhKhKgBhrMAAAhSNQABhqBKhMQBMhKBpgBMBSOAAAQBqABBLBKQBMBMAABqIAAXpQgBBqhMBMQhMBKhrAAIgDgBQiwABigBEQiaBBh3B3Qh4B4hCCbQhDCgAACuQAACvBDCgQBCCcB4B3QB3B3CaBBQCgBFCwAAIADAAQBrAABMBKQBMBLABBrIAAXoQAABrhMBKQhLBMhqAAg",
      );
    this.shape.setTransform(42.9911, 42.9911, 0.1488, 0.1488);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol1,
    new cjs.Rectangle(0, 0, 86, 86),
    null,
  );

  // stage content:
  (lib.dragdrop = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [0];
    this.isSingleFrame = false;
    // timeline functions:
    this.frame_0 = function () {
      if (this.isSingleFrame) {
        return;
      }
      if (this.totalFrames == 1) {
        this.isSingleFrame = true;
      }
      document.body.style.backgroundColor = "#CCCCCC";
      stage.enableMouseOver(20);
      createjs.Touch.enable(stage);

      const gameScene = this;

      let activeObject = null;
      let itemIndex = 0;
      let itemsPlaced = 0;
      let totalItems = 0;
      const allowedAngles = [0, 90, 180, 270];

      createjs.Sound.removeAllSounds();
      createjs.Sound.registerSound("./sounds/pickClick.mp3", "pickClick");
      createjs.Sound.registerSound("./sounds/dropClick.mp3", "dropClick");
      createjs.Sound.registerSound("./sounds/actionClick.mp3", "actionClick");

      const toggleOtherItemsMouse = (enable) => {
        for (let i = 0; i < totalItems; i++) {
          const item = gameScene[`object${i}`];
          if (
            item &&
            item !== activeObject &&
            (!item.isSnapped || enable === false)
          ) {
            item.mouseEnabled = enable;
            item.mouseChildren = enable;
          }
        }
      };

      const handleKeyDown = (event) => {
        if (activeObject && !activeObject.isSnapped) {
          if (event.code === "ArrowLeft" || event.code === "KeyA") {
            activeObject.rotation -= 10;
            processHitDetection(activeObject);
          } else if (event.code === "ArrowRight" || event.code === "KeyD") {
            activeObject.rotation += 10;
            processHitDetection(activeObject);
          }
        }
      };

      const generatePuzzleRound = () => {
        itemsPlaced = 0;
        activeObject = null;
        stage.canvas.style.cursor = "default";

        window.removeEventListener("keydown", handleKeyDown);

        for (let i = 0; i < totalItems; i++) {
          const item = gameScene[`object${i}`];
          const snapPoint = gameScene[`target${i}`];

          item.visible = true;
          item.cursor = "pointer";
          item.isSnapped = false;

          item.mouseEnabled = true;
          item.mouseChildren = true;

          if (snapPoint) {
            snapPoint.visible = true;
          }

          if (createjs.Touch.isTouch) {
            item.rotation = 0;
          } else {
            item.rotation =
              allowedAngles[Math.floor(Math.random() * allowedAngles.length)];
          }

          item.x = 80 + Math.random() * (720 - 160);
          item.y = 750 + Math.random() * (1220 - 750);

          item.off("mousedown", item.mdListener);
          item.off("pressmove", item.pmListener);
          item.off("pressup", item.puListener);

          bindItemEvents(item);
        }

        window.addEventListener("keydown", handleKeyDown);
      };

      const processHitDetection = (dragItem) => {
        if (dragItem.isSnapped) return true;

        const snapPoint = gameScene[`target${dragItem.myNumber}`];

        if (snapPoint) {
          const globalTarget = snapPoint.parent.localToLocal(
            snapPoint.x,
            snapPoint.y,
            stage,
          );

          const deltaX = dragItem.x - globalTarget.x;
          const deltaY = dragItem.y - globalTarget.y;
          const currentDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          const magnetRadius = 40;

          let normalizedAngle = dragItem.rotation % 360;
          if (normalizedAngle < 0) normalizedAngle += 360;

          if (
            currentDistance < magnetRadius &&
            (normalizedAngle < 5 || normalizedAngle > 355)
          ) {
            dragItem.isSnapped = true;
            createjs.Sound.play("actionClick");

            if (dragItem.myOriginalParent) {
              dragItem.myOriginalParent.addChild(dragItem);
            }

            dragItem.x = snapPoint.x;
            dragItem.y = snapPoint.y;
            dragItem.rotation = 0;

            dragItem.mouseEnabled = false;
            dragItem.mouseChildren = false;
            dragItem.cursor = "default";

            if (activeObject === dragItem) {
              stage.canvas.style.cursor = "default";
              activeObject = null;
            }

            dragItem.off("mousedown", dragItem.mdListener);
            dragItem.off("pressmove", dragItem.pmListener);
            dragItem.off("pressup", dragItem.puListener);

            toggleOtherItemsMouse(true);

            itemsPlaced++;

            if (itemsPlaced === totalItems) {
              setTimeout(() => {
                generatePuzzleRound();
              }, 1000);
            }
            return true;
          }
        }
        return false;
      };

      const bindItemEvents = (sceneItem) => {
        sceneItem.mdListener = sceneItem.on("mousedown", (event) => {
          if (sceneItem.isSnapped) return;

          activeObject = sceneItem;

          if (!sceneItem.myOriginalParent) {
            sceneItem.myOriginalParent = sceneItem.parent;
          }
          sceneItem.startX = sceneItem.x;
          sceneItem.startY = sceneItem.y;

          toggleOtherItemsMouse(false);

          const globalPos = sceneItem.parent.localToLocal(
            sceneItem.x,
            sceneItem.y,
            stage,
          );

          stage.addChild(sceneItem);
          sceneItem.x = globalPos.x;
          sceneItem.y = globalPos.y;

          const globalClick = stage.globalToLocal(event.stageX, event.stageY);
          sceneItem.offset = {
            x: sceneItem.x - globalClick.x,
            y: sceneItem.y - globalClick.y,
          };

          createjs.Sound.play("pickClick");
          sceneItem.cursor = "grabbing";
          stage.canvas.style.cursor = "grabbing";
        });

        sceneItem.pmListener = sceneItem.on("pressmove", (event) => {
          if (activeObject !== sceneItem || sceneItem.isSnapped) return;

          stage.canvas.style.cursor = "grabbing";

          const currentMouse = stage.globalToLocal(event.stageX, event.stageY);
          sceneItem.x = currentMouse.x + sceneItem.offset.x;
          sceneItem.y = currentMouse.y + sceneItem.offset.y;

          processHitDetection(sceneItem);
        });

        sceneItem.puListener = sceneItem.on("pressup", () => {
          stage.canvas.style.cursor = "default";

          toggleOtherItemsMouse(true);
          if (sceneItem.isSnapped) return;

          if (!processHitDetection(sceneItem)) {
            createjs.Sound.play("dropClick");
            sceneItem.cursor = "pointer";

            if (sceneItem.myOriginalParent) {
              const finalLocalPos = sceneItem.myOriginalParent.globalToLocal(
                stage.mouseX,
                stage.mouseY,
              );

              sceneItem.myOriginalParent.addChild(sceneItem);
              sceneItem.x = finalLocalPos.x + sceneItem.offset.x;
              sceneItem.y = finalLocalPos.y + sceneItem.offset.y;
            }

            if (stage.mouseY >= 750 && stage.mouseY <= 1220) {
              if (sceneItem.x < 60) sceneItem.x = 60;
              if (sceneItem.x > 660) sceneItem.x = 660;
            } else {
              sceneItem.x = sceneItem.startX;
              sceneItem.y = sceneItem.startY;
            }
          }
          activeObject = null;
        });
      };

      while (gameScene[`object${itemIndex}`]) {
        gameScene[`object${itemIndex}`].myNumber = itemIndex;
        itemIndex++;
      }

      totalItems = itemIndex;
      generatePuzzleRound();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

    // object
    this.object35 = new lib.Symbol40();
    this.object35.name = "object35";
    this.object35.setTransform(
      181.7,
      757.95,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.3,
      51.2,
    );

    this.object34 = new lib.Symbol39();
    this.object34.name = "object34";
    this.object34.setTransform(
      77.9,
      1138.9,
      1.1943,
      1.1943,
      90,
      0,
      0,
      42.9,
      51.2,
    );

    this.object33 = new lib.Symbol38();
    this.object33.name = "object33";
    this.object33.setTransform(
      361.25,
      1186.7,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.8,
      42.9,
    );

    this.object32 = new lib.Symbol37();
    this.object32.name = "object32";
    this.object32.setTransform(
      191.65,
      1061.6,
      1.1943,
      1.1943,
      180,
      0,
      0,
      42.9,
      42.9,
    );

    this.object31 = new lib.Symbol36();
    this.object31.name = "object31";
    this.object31.setTransform(
      75.05,
      977.9,
      1.1943,
      1.1943,
      90,
      0,
      0,
      59.7,
      51.2,
    );

    this.object30 = new lib.Symbol35();
    this.object30.name = "object30";
    this.object30.setTransform(
      321.05,
      1022.2,
      1.1943,
      1.1943,
      90,
      0,
      0,
      43,
      42.9,
    );

    this.object29 = new lib.Symbol34();
    this.object29.name = "object29";
    this.object29.setTransform(
      404.7,
      778,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.3,
      51.3,
    );

    this.object28 = new lib.Symbol33();
    this.object28.name = "object28";
    this.object28.setTransform(
      190.45,
      865.65,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.3,
      42.9,
    );

    this.object27 = new lib.Symbol32();
    this.object27.name = "object27";
    this.object27.setTransform(
      121.95,
      1186.7,
      1.1943,
      1.1943,
      90,
      0,
      0,
      42.9,
      59.6,
    );

    this.object26 = new lib.Symbol31();
    this.object26.name = "object26";
    this.object26.setTransform(
      644.15,
      806.45,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.4,
      51.3,
    );

    this.object25 = new lib.Symbol30();
    this.object25.name = "object25";
    this.object25.setTransform(
      544.5,
      998.3,
      1.1943,
      1.1943,
      90,
      0,
      0,
      59.7,
      42.9,
    );

    this.object24 = new lib.Symbol29();
    this.object24.name = "object24";
    this.object24.setTransform(
      406.35,
      939.05,
      1.1943,
      1.1943,
      180,
      0,
      0,
      43,
      59.6,
    );

    this.object23 = new lib.Symbol28();
    this.object23.name = "object23";
    this.object23.setTransform(
      523.8,
      1110.6,
      1.1943,
      1.1943,
      180,
      0,
      0,
      42.9,
      51.3,
    );

    this.object22 = new lib.Symbol27();
    this.object22.name = "object22";
    this.object22.setTransform(
      404.7,
      778.1,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.4,
      51.3,
    );

    this.object21 = new lib.Symbol26();
    this.object21.name = "object21";
    this.object21.setTransform(
      396.45,
      1060.9,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.4,
      51.3,
    );

    this.object20 = new lib.Symbol25();
    this.object20.name = "object20";
    this.object20.setTransform(
      547.45,
      1193.5,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.7,
      59.8,
    );

    this.object19 = new lib.Symbol24();
    this.object19.name = "object19";
    this.object19.setTransform(
      622.9,
      910.55,
      1.1943,
      1.1943,
      90,
      0,
      0,
      43,
      59.6,
    );

    this.object18 = new lib.Symbol23();
    this.object18.name = "object18";
    this.object18.setTransform(
      245.05,
      988.3,
      1.1943,
      1.1943,
      180,
      0,
      0,
      51.4,
      42.9,
    );

    this.object17 = new lib.Symbol22();
    this.object17.name = "object17";
    this.object17.setTransform(395.8, 1155.4, 1.1943, 1.1943, 0, 0, 0, 43, 43);

    this.object16 = new lib.Symbol21();
    this.object16.name = "object16";
    this.object16.setTransform(
      363.05,
      963.55,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.3,
      51.3,
    );

    this.object15 = new lib.Symbol20();
    this.object15.name = "object15";
    this.object15.setTransform(
      264.4,
      1116.4,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.6,
      43,
    );

    this.object14 = new lib.Symbol19();
    this.object14.name = "object14";
    this.object14.setTransform(95, 781.35, 1.1943, 1.1943, 90, 0, 0, 43, 51.3);

    this.object13 = new lib.Symbol18();
    this.object13.name = "object13";
    this.object13.setTransform(
      85.8,
      1100.9,
      1.1943,
      1.1943,
      90,
      0,
      0,
      59.7,
      51.3,
    );

    this.object12 = new lib.Symbol17();
    this.object12.name = "object12";
    this.object12.setTransform(
      550.4,
      953.55,
      1.1943,
      1.1943,
      90,
      0,
      0,
      43,
      59.6,
    );

    this.object11 = new lib.Symbol16();
    this.object11.name = "object11";
    this.object11.setTransform(
      543.7,
      744.75,
      1.1943,
      1.1943,
      -90,
      0,
      0,
      42.9,
      59.6,
    );

    this.object10 = new lib.Symbol15();
    this.object10.name = "object10";
    this.object10.setTransform(
      518.4,
      857.5,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.4,
      51.4,
    );

    this.object9 = new lib.Symbol14();
    this.object9.name = "object9";
    this.object9.setTransform(
      236.4,
      910.6,
      1.1943,
      1.1943,
      90,
      0,
      0,
      59.7,
      51.4,
    );

    this.object8 = new lib.Symbol13();
    this.object8.name = "object8";
    this.object8.setTransform(272.5, 768, 1.1943, 1.1943, 90, 0, 0, 43, 43);

    this.object7 = new lib.Symbol12();
    this.object7.name = "object7";
    this.object7.setTransform(
      662.9,
      1085.25,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.4,
      51.4,
    );

    this.object6 = new lib.Symbol11();
    this.object6.name = "object6";
    this.object6.setTransform(
      359.05,
      865.75,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.4,
      51.4,
    );

    this.object5 = new lib.Symbol10();
    this.object5.name = "object5";
    this.object5.setTransform(
      122,
      925.65,
      1.1943,
      1.1943,
      90,
      0,
      0,
      42.9,
      42.9,
    );

    this.object4 = new lib.Symbol9();
    this.object4.name = "object4";
    this.object4.setTransform(
      503.85,
      1171.75,
      1.1943,
      1.1943,
      180,
      0,
      0,
      59.6,
      51.4,
    );

    this.object3 = new lib.Symbol8();
    this.object3.name = "object3";
    this.object3.setTransform(
      245.25,
      1206.7,
      1.1943,
      1.1943,
      -90,
      0,
      0,
      42.9,
      51.4,
    );

    this.object2 = new lib.Symbol4();
    this.object2.name = "object2";
    this.object2.setTransform(
      607.85,
      1196.8,
      1.1943,
      1.1943,
      90,
      0,
      0,
      51.4,
      51.4,
    );

    this.object1 = new lib.Symbol3();
    this.object1.name = "object1";
    this.object1.setTransform(
      673.05,
      970,
      1.1943,
      1.1943,
      90,
      0,
      0,
      59.7,
      42.9,
    );

    this.object0 = new lib.Symbol1();
    this.object0.name = "object0";
    this.object0.setTransform(198.45, 1013.75, 1.1943, 1.1943, 0, 0, 0, 43, 43);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.object0 },
            { t: this.object1 },
            { t: this.object2 },
            { t: this.object3 },
            { t: this.object4 },
            { t: this.object5 },
            { t: this.object6 },
            { t: this.object7 },
            { t: this.object8 },
            { t: this.object9 },
            { t: this.object10 },
            { t: this.object11 },
            { t: this.object12 },
            { t: this.object13 },
            { t: this.object14 },
            { t: this.object15 },
            { t: this.object16 },
            { t: this.object17 },
            { t: this.object18 },
            { t: this.object19 },
            { t: this.object20 },
            { t: this.object21 },
            { t: this.object22 },
            { t: this.object23 },
            { t: this.object24 },
            { t: this.object25 },
            { t: this.object26 },
            { t: this.object27 },
            { t: this.object28 },
            { t: this.object29 },
            { t: this.object30 },
            { t: this.object31 },
            { t: this.object32 },
            { t: this.object33 },
            { t: this.object34 },
            { t: this.object35 },
          ],
        })
        .wait(1),
    );

    // target
    this.target35 = new lib.Symbol40();
    this.target35.name = "target35";
    this.target35.setTransform(
      616.35,
      616.55,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.3,
      51.2,
    );
    this.target35.compositeOperation = "lighter";

    this.target34 = new lib.Symbol39();
    this.target34.name = "target34";
    this.target34.setTransform(
      519.8,
      616.55,
      1.1943,
      1.1943,
      0,
      0,
      0,
      43,
      51.2,
    );
    this.target34.compositeOperation = "lighter";

    this.target33 = new lib.Symbol38();
    this.target33.name = "target33";
    this.target33.setTransform(
      413.2,
      626.65,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.8,
      42.9,
    );
    this.target33.compositeOperation = "lighter";

    this.target32 = new lib.Symbol37();
    this.target32.name = "target32";
    this.target32.setTransform(
      306.5,
      626.65,
      1.1943,
      1.1943,
      0,
      0,
      0,
      43,
      42.9,
    );
    this.target32.compositeOperation = "lighter";

    this.target31 = new lib.Symbol36();
    this.target31.name = "target31";
    this.target31.setTransform(
      199.9,
      616.55,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.8,
      51.2,
    );
    this.target31.compositeOperation = "lighter";

    this.target30 = new lib.Symbol35();
    this.target30.name = "target30";
    this.target30.setTransform(93.2, 626.65, 1.1943, 1.1943, 0, 0, 0, 43, 42.9);
    this.target30.compositeOperation = "lighter";

    this.target29 = new lib.Symbol34();
    this.target29.name = "target29";
    this.target29.setTransform(
      616.35,
      510.15,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.3,
      51.4,
    );
    this.target29.compositeOperation = "lighter";

    this.target28 = new lib.Symbol33();
    this.target28.name = "target28";
    this.target28.setTransform(
      509.85,
      520,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      42.9,
    );
    this.target28.compositeOperation = "lighter";

    this.target27 = new lib.Symbol32();
    this.target27.name = "target27";
    this.target27.setTransform(
      413.15,
      519.95,
      1.1943,
      1.1943,
      0,
      0,
      0,
      43,
      59.6,
    );
    this.target27.compositeOperation = "lighter";

    this.target26 = new lib.Symbol31();
    this.target26.name = "target26";
    this.target26.setTransform(
      316.55,
      530.15,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target26.compositeOperation = "lighter";

    this.target25 = new lib.Symbol30();
    this.target25.name = "target25";
    this.target25.setTransform(199.9, 520, 1.1943, 1.1943, 0, 0, 0, 59.8, 42.9);
    this.target25.compositeOperation = "lighter";

    this.target24 = new lib.Symbol29();
    this.target24.name = "target24";
    this.target24.setTransform(93.2, 519.95, 1.1943, 1.1943, 0, 0, 0, 43, 59.6);
    this.target24.compositeOperation = "lighter";

    this.target23 = new lib.Symbol28();
    this.target23.name = "target23";
    this.target23.setTransform(
      626.45,
      403.5,
      1.1943,
      1.1943,
      0,
      0,
      0,
      43,
      51.4,
    );
    this.target23.compositeOperation = "lighter";

    this.target22 = new lib.Symbol27();
    this.target22.name = "target22";
    this.target22.setTransform(
      529.85,
      423.5,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target22.compositeOperation = "lighter";

    this.target21 = new lib.Symbol26();
    this.target21.name = "target21";
    this.target21.setTransform(
      423.2,
      403.5,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target21.compositeOperation = "lighter";

    this.target20 = new lib.Symbol25();
    this.target20.name = "target20";
    this.target20.setTransform(
      306.55,
      413.4,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.8,
      59.7,
    );
    this.target20.compositeOperation = "lighter";

    this.target19 = new lib.Symbol24();
    this.target19.name = "target19";
    this.target19.setTransform(
      199.85,
      413.4,
      1.1943,
      1.1943,
      0,
      0,
      0,
      43,
      59.7,
    );
    this.target19.compositeOperation = "lighter";

    this.target18 = new lib.Symbol23();
    this.target18.name = "target18";
    this.target18.setTransform(
      103.25,
      413.35,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      42.9,
    );
    this.target18.compositeOperation = "lighter";

    this.target17 = new lib.Symbol22();
    this.target17.name = "target17";
    this.target17.setTransform(626.45, 306.8, 1.1943, 1.1943, 0, 0, 0, 43, 43);
    this.target17.compositeOperation = "lighter";

    this.target16 = new lib.Symbol21();
    this.target16.name = "target16";
    this.target16.setTransform(
      529.85,
      316.85,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target16.compositeOperation = "lighter";

    this.target15 = new lib.Symbol20();
    this.target15.name = "target15";
    this.target15.setTransform(413.2, 306.8, 1.1943, 1.1943, 0, 0, 0, 59.8, 43);
    this.target15.compositeOperation = "lighter";

    this.target14 = new lib.Symbol19();
    this.target14.name = "target14";
    this.target14.setTransform(
      306.5,
      296.85,
      1.1943,
      1.1943,
      0,
      0,
      0,
      43,
      51.4,
    );
    this.target14.compositeOperation = "lighter";

    this.target13 = new lib.Symbol18();
    this.target13.name = "target13";
    this.target13.setTransform(
      199.9,
      296.85,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.8,
      51.4,
    );
    this.target13.compositeOperation = "lighter";

    this.target12 = new lib.Symbol17();
    this.target12.name = "target12";
    this.target12.setTransform(93.2, 306.75, 1.1943, 1.1943, 0, 0, 0, 43, 59.7);
    this.target12.compositeOperation = "lighter";

    this.target11 = new lib.Symbol16();
    this.target11.name = "target11";
    this.target11.setTransform(
      626.15,
      200.25,
      1.1943,
      1.1943,
      0,
      0,
      0,
      42.9,
      59.6,
    );
    this.target11.compositeOperation = "lighter";

    this.target10 = new lib.Symbol15();
    this.target10.name = "target10";
    this.target10.setTransform(
      529.85,
      210.2,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target10.compositeOperation = "lighter";

    this.target9 = new lib.Symbol14();
    this.target9.name = "target9";
    this.target9.setTransform(
      413.2,
      210.2,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.8,
      51.4,
    );
    this.target9.compositeOperation = "lighter";

    this.target8 = new lib.Symbol13();
    this.target8.name = "target8";
    this.target8.setTransform(306.5, 200.15, 1.1943, 1.1943, 0, 0, 0, 43, 43);
    this.target8.compositeOperation = "lighter";

    this.target7 = new lib.Symbol12();
    this.target7.name = "target7";
    this.target7.setTransform(
      209.9,
      190.2,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target7.compositeOperation = "lighter";

    this.target6 = new lib.Symbol11();
    this.target6.name = "target6";
    this.target6.setTransform(
      103.25,
      190.2,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target6.compositeOperation = "lighter";

    this.target5 = new lib.Symbol10();
    this.target5.name = "target5";
    this.target5.setTransform(626.45, 93.5, 1.1943, 1.1943, 0, 0, 0, 43, 43);
    this.target5.compositeOperation = "lighter";

    this.target4 = new lib.Symbol9();
    this.target4.name = "target4";
    this.target4.setTransform(
      519.75,
      103.55,
      1.1943,
      1.1943,
      0,
      0,
      0,
      59.7,
      51.4,
    );
    this.target4.compositeOperation = "lighter";

    this.target3 = new lib.Symbol8();
    this.target3.name = "target3";
    this.target3.setTransform(413.15, 103.6, 1.1943, 1.1943, 0, 0, 0, 43, 51.4);
    this.target3.compositeOperation = "lighter";

    this.target2 = new lib.Symbol4();
    this.target2.name = "target2";
    this.target2.setTransform(
      316.55,
      103.55,
      1.1943,
      1.1943,
      0,
      0,
      0,
      51.4,
      51.4,
    );
    this.target2.compositeOperation = "lighter";

    this.target1 = new lib.Symbol3();
    this.target1.name = "target1";
    this.target1.setTransform(199.9, 93.5, 1.1943, 1.1943, 0, 0, 0, 59.8, 43);
    this.target1.compositeOperation = "lighter";

    this.target0 = new lib.Symbol1();
    this.target0.name = "target0";
    this.target0.setTransform(93.2, 93.5, 1.1943, 1.1943, 0, 0, 0, 43, 43);
    this.target0.compositeOperation = "lighter";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.target0 },
            { t: this.target1 },
            { t: this.target2 },
            { t: this.target3 },
            { t: this.target4 },
            { t: this.target5 },
            { t: this.target6 },
            { t: this.target7 },
            { t: this.target8 },
            { t: this.target9 },
            { t: this.target10 },
            { t: this.target11 },
            { t: this.target12 },
            { t: this.target13 },
            { t: this.target14 },
            { t: this.target15 },
            { t: this.target16 },
            { t: this.target17 },
            { t: this.target18 },
            { t: this.target19 },
            { t: this.target20 },
            { t: this.target21 },
            { t: this.target22 },
            { t: this.target23 },
            { t: this.target24 },
            { t: this.target25 },
            { t: this.target26 },
            { t: this.target27 },
            { t: this.target28 },
            { t: this.target29 },
            { t: this.target30 },
            { t: this.target31 },
            { t: this.target32 },
            { t: this.target33 },
            { t: this.target34 },
            { t: this.target35 },
          ],
        })
        .wait(1),
    );

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0)")
      .ss(1, 1, 1, 3, true)
      .p("Eg5zhljMBznAAAMAAADLHMhznAAAg");
    this.shape.setTransform(360, 640);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#CCCCCC").s().p("Eg5zBlkMAAAjLHMBznAAAMAAADLHg");
    this.shape_1.setTransform(360, 640);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(349, 629, 382, 662);
  // library properties:
  lib.properties = {
    id: "CE6A30CE6995754291FF0B493FED87AC",
    width: 720,
    height: 1280,
    fps: 30,
    color: "#CCCCCC",
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["CE6A30CE6995754291FF0B493FED87AC"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers,
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h,
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
