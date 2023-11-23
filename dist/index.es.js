function f() {
}
function S(t) {
  return t();
}
function q() {
  return /* @__PURE__ */ Object.create(null);
}
function b(t) {
  t.forEach(S);
}
function B(t) {
  return typeof t == "function";
}
function D(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function G(t) {
  return Object.keys(t).length === 0;
}
function p(t, e) {
  t.appendChild(e);
}
function L(t, e, n) {
  const r = H(t);
  if (!r.getElementById(e)) {
    const o = k("style");
    o.id = e, o.textContent = n, J(r, o);
  }
}
function H(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function J(t, e) {
  return p(t.head || t, e), e.sheet;
}
function R(t, e, n) {
  t.insertBefore(e, n || null);
}
function v(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function k(t) {
  return document.createElement(t);
}
function y(t) {
  return document.createTextNode(t);
}
function I(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function M(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function K(t) {
  return Array.from(t.childNodes);
}
function P(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
let w;
function h(t) {
  w = t;
}
const d = [], A = [];
let _ = [];
const O = [], Q = /* @__PURE__ */ Promise.resolve();
let $ = !1;
function U() {
  $ || ($ = !0, Q.then(T));
}
function x(t) {
  _.push(t);
}
const m = /* @__PURE__ */ new Set();
let a = 0;
function T() {
  if (a !== 0)
    return;
  const t = w;
  do {
    try {
      for (; a < d.length; ) {
        const e = d[a];
        a++, h(e), V(e.$$);
      }
    } catch (e) {
      throw d.length = 0, a = 0, e;
    }
    for (h(null), d.length = 0, a = 0; A.length; )
      A.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      m.has(n) || (m.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; O.length; )
    O.pop()();
  $ = !1, m.clear(), h(t);
}
function V(t) {
  if (t.fragment !== null) {
    t.update(), b(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
function W(t) {
  const e = [], n = [];
  _.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), _ = e;
}
const X = /* @__PURE__ */ new Set();
function Y(t, e) {
  t && t.i && (X.delete(t), t.i(e));
}
function Z(t, e, n, r) {
  const { fragment: o, after_update: i } = t.$$;
  o && o.m(e, n), r || x(() => {
    const c = t.$$.on_mount.map(S).filter(B);
    t.$$.on_destroy ? t.$$.on_destroy.push(...c) : b(c), t.$$.on_mount = [];
  }), i.forEach(x);
}
function tt(t, e) {
  const n = t.$$;
  n.fragment !== null && (W(n.after_update), b(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function et(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), U(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function z(t, e, n, r, o, i, c, u = [-1]) {
  const g = w;
  h(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: f,
    not_equal: o,
    bound: q(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    callbacks: q(),
    dirty: u,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  c && c(s.root);
  let E = !1;
  if (s.ctx = n ? n(t, e.props || {}, (l, j, ...C) => {
    const N = C.length ? C[0] : j;
    return s.ctx && o(s.ctx[l], s.ctx[l] = N) && (!s.skip_bound && s.bound[l] && s.bound[l](N), E && et(t, l)), j;
  }) : [], s.update(), E = !0, b(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = K(e.target);
      s.fragment && s.fragment.l(l), l.forEach(v);
    } else
      s.fragment && s.fragment.c();
    e.intro && Y(t.$$.fragment), Z(t, e.target, e.anchor, e.customElement), T();
  }
  h(g);
}
class F {
  $destroy() {
    tt(this, 1), this.$destroy = f;
  }
  $on(e, n) {
    if (!B(n))
      return f;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !G(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function nt(t) {
  L(t, "svelte-1w5q7iy", ".bg-black.svelte-1w5q7iy{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1w5q7iy{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function rt(t) {
  let e, n, r, o, i;
  return {
    c() {
      e = k("button"), n = y("count is "), r = y(t[0]), M(e, "class", "bg-black text-white svelte-1w5q7iy");
    },
    m(c, u) {
      R(c, e, u), p(e, n), p(e, r), o || (i = I(e, "click", t[1]), o = !0);
    },
    p(c, [u]) {
      u & 1 && P(r, c[0]);
    },
    i: f,
    o: f,
    d(c) {
      c && v(e), o = !1, i();
    }
  };
}
function ot(t, e, n) {
  let r = 0;
  return [r, () => {
    n(0, r += 1);
  }];
}
class ut extends F {
  constructor(e) {
    super(), z(this, e, ot, rt, D, {}, nt);
  }
}
function ct(t) {
  L(t, "svelte-1jyix36", ".bg-red.svelte-1jyix36{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1jyix36{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1jyix36{border:8px solid #35eb9a}");
}
function st(t) {
  let e, n, r, o, i;
  return {
    c() {
      e = k("button"), n = y("count is "), r = y(t[0]), M(e, "class", "btn bg-red text-white svelte-1jyix36");
    },
    m(c, u) {
      R(c, e, u), p(e, n), p(e, r), o || (i = I(e, "click", t[1]), o = !0);
    },
    p(c, [u]) {
      u & 1 && P(r, c[0]);
    },
    i: f,
    o: f,
    d(c) {
      c && v(e), o = !1, i();
    }
  };
}
function it(t, e, n) {
  let r = 0;
  return [r, () => {
    n(0, r += 2);
  }];
}
class lt extends F {
  constructor(e) {
    super(), z(this, e, it, st, D, {}, ct);
  }
}
export {
  ut as Counter,
  lt as Counter2
};
