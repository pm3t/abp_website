#!/usr/bin/env python3
"""Generate 3-slide ABP PPT with polished design."""
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

NAVY = RGBColor(0x0F, 0x1B, 0x2D)
NAVY2 = RGBColor(0x1A, 0x2E, 0x4E)
GOLD = RGBColor(0xC7, 0x97, 0x3F)
GOLD_LIGHT = RGBColor(0xE8, 0xC8, 0x6A)
CREAM = RGBColor(0xF6, 0xF4, 0xEC)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
GREY_DARK = RGBColor(0x33, 0x33, 0x33)
GREY = RGBColor(0x5A, 0x6C, 0x7D)
GREY_LIGHT = RGBColor(0xE9, 0xE6, 0xDC)
GREEN = RGBColor(0x1F, 0x9E, 0x6D)
RED_SOFT = RGBColor(0xC0, 0x39, 0x2B)

def hex_to_rgb(h):
    h=h.lstrip('#')
    return RGBColor(int(h[0:2],16),int(h[2:4],16),int(h[4:6],16))

def set_bg(slide, color):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color

def add_shape_rect(slide, left, top, w, h, fill_color, line_none=True, radius=None):
    shape_type = MSO_SHAPE.ROUNDED_RECTANGLE if radius else MSO_SHAPE.RECTANGLE
    shp = slide.shapes.add_shape(shape_type, left, top, w, h)
    shp.fill.solid()
    shp.fill.fore_color.rgb = fill_color
    if line_none:
        shp.line.fill.background()
    if radius:
        try: shp.adjustments[0] = 0.08
        except: pass
    return shp

def add_text(slide, left, top, w, h, text, size=18, bold=False, color=GREY_DARK, align=PP_ALIGN.LEFT, italic=False):
    tx = slide.shapes.add_textbox(left, top, w, h)
    tf = tx.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(size)
    p.font.bold = bold
    p.font.color.rgb = color
    p.font.italic = italic
    p.alignment = align
    try: p.font.name = 'Calibri'
    except: pass
    return tx

def add_para(text_frame, text, size=14, bold=False, color=GREY_DARK, space_after=Pt(4), italic=False, align=None):
    p = text_frame.add_paragraph()
    p.text = text
    p.font.size = Pt(size)
    p.font.bold = bold
    p.font.color.rgb = color
    p.font.italic = italic
    p.space_after = space_after
    if align: p.alignment = align
    try: p.font.name = 'Calibri'
    except: pass
    return p

prs = Presentation()
prs.slide_width = Inches(13.33)
prs.slide_height = Inches(7.5)
blank = prs.slide_layouts[6]

# ============ SLIDE 1 : PROFIL ============
s1 = prs.slides.add_slide(blank)
set_bg(s1, NAVY)
# gold top bar
add_shape_rect(s1, Inches(0), Inches(0), Inches(13.33), Inches(0.08), GOLD)
# decorative gold circle off-canvas right
circ = s1.shapes.add_shape(MSO_SHAPE.OVAL, Inches(10.5), Inches(-1.5), Inches(5), Inches(5))
circ.fill.solid(); circ.fill.fore_color.rgb = RGBColor(0x16,0x28,0x44)
circ.line.fill.background()
circ2 = s1.shapes.add_shape(MSO_SHAPE.OVAL, Inches(11.2), Inches(-0.8), Inches(3.2), Inches(3.2))
circ2.fill.solid(); circ2.fill.fore_color.rgb = RGBColor(0x1E,0x36,0x5C)
circ2.line.fill.background()

# label
add_text(s1, Inches(0.8), Inches(0.55), Inches(4), Inches(0.4),
         "●  PT. ANUGERAH BAKTI PRIMA", size=13, bold=True, color=GOLD_LIGHT, align=PP_ALIGN.LEFT)
# title
t1 = s1.shapes.add_textbox(Inches(0.8), Inches(1.05), Inches(7.2), Inches(1.6))
tf = t1.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "Marketplace SaaS\nPertama di Indonesia"
p.font.size = Pt(46); p.font.bold = True; p.font.color.rgb = WHITE
try: p.font.name='Calibri'
except: pass
# gold underline
add_shape_rect(s1, Inches(0.8), Inches(3.15), Inches(1.2), Inches(0.06), GOLD)
# description
d1 = s1.shapes.add_textbox(Inches(0.8), Inches(3.4), Inches(6.8), Inches(1.4))
tf = d1.text_frame; tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "Kami menyediakan ekosistem aplikasi berlangganan siap pakai untuk RT/RW, gereja, jasa lapangan, instansi pemerintah, HR, agrobisnis, dan retail."
p.font.size = Pt(17); p.font.color.rgb = RGBColor(0xD6,0xD9,0xE0)
# stats 3 mini cards
stats = [("7", "Produk SaaS Siap Pakai"), ("0 Rp", "Modal Awal  •  Zero CAPEX"), ("100% OPEX", "Biaya Rutin Terprediksi")]
for i,(num, lbl) in enumerate(stats):
    x = Inches(0.8 + i*2.35)
    card = add_shape_rect(s1, x, Inches(5.0), Inches(2.15), Inches(1.15), RGBColor(0x18,0x2C,0x4A), radius=True)
    # gold number
    add_text(s1, x+Inches(0.15), Inches(5.05), Inches(1.85), Inches(0.55), num, size=22, bold=True, color=GOLD_LIGHT, align=PP_ALIGN.LEFT)
    add_text(s1, x+Inches(0.15), Inches(5.6), Inches(1.85), Inches(0.45), lbl, size=11, bold=False, color=RGBColor(0xC9,0xD1,0xDD), align=PP_ALIGN.LEFT)

# right panel card
panel = add_shape_rect(s1, Inches(8.6), Inches(0.9), Inches(3.9), Inches(5.7), WHITE, radius=True)
# panel header navy
hdr = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.6), Inches(0.9), Inches(3.9), Inches(1.25))
hdr.fill.solid(); hdr.fill.fore_color.rgb = GOLD; hdr.line.fill.background()
try: hdr.adjustments[0]=0.08
except: pass
add_text(s1, Inches(8.9), Inches(1.05), Inches(3.3), Inches(0.4), "PROFIL SINGKAT", size=12, bold=True, color=WHITE, align=PP_ALIGN.LEFT)
add_text(s1, Inches(8.9), Inches(1.4), Inches(3.3), Inches(0.5), "Solusi OPEX • Langsung Pakai", size=15, bold=True, color=WHITE, align=PP_ALIGN.LEFT)

profil_items = [
    ("Fokus", "Pengembang software berbasis langganan (SaaS)"),
    ("Segmen", "Komunitas, keagamaan, jasa, pemerintah, HR, agro, retail"),
    ("Keunggulan", "Tanpa server & tim IT • update gratis • via HP/browser"),
    ("Kontak", "info@abp-prima.id  •  +62 812-3456-7890"),
]
y = 2.45
for k,v in profil_items:
    add_text(s1, Inches(8.95), Inches(y), Inches(3.2), Inches(0.3), k.upper(), size=10, bold=True, color=GOLD, align=PP_ALIGN.LEFT)
    tb = s1.shapes.add_textbox(Inches(8.95), Inches(y+0.28), Inches(3.2), Inches(0.55))
    tf = tb.text_frame; tf.word_wrap=True
    p=tf.paragraphs[0]; p.text=v; p.font.size=Pt(13); p.font.color.rgb=GREY_DARK
    y += 0.85
# CTA button
btn = add_shape_rect(s1, Inches(8.95), Inches(5.65), Inches(3.2), Inches(0.6), NAVY, radius=True)
add_text(s1, Inches(8.95), Inches(5.68), Inches(3.2), Inches(0.55), "Minta Demo  →", size=13, bold=True, color=WHITE, align=PP_ALIGN.CENTER)
# footer
add_text(s1, Inches(0.8), Inches(6.85), Inches(11.7), Inches(0.3), "© 2026 PT. Anugerah Bakti Prima  •  Marketplace SaaS  •  abp.id", size=9, color=RGBColor(0x8A,0x95,0xA8), align=PP_ALIGN.LEFT)

# ============ SLIDE 2 : KONSEP SAAS + PILOTING ============
s2 = prs.slides.add_slide(blank)
set_bg(s2, CREAM)
add_shape_rect(s2, Inches(0), Inches(0), Inches(13.33), Inches(0.08), GOLD)
add_text(s2, Inches(0.8), Inches(0.35), Inches(4), Inches(0.35), "—  MODEL BISNIS", size=12, bold=True, color=GOLD, align=PP_ALIGN.LEFT)
add_text(s2, Inches(0.8), Inches(0.7), Inches(7.5), Inches(0.8), "SaaS Berbasis Langganan", size=36, bold=True, color=NAVY, align=PP_ALIGN.LEFT)
add_text(s2, Inches(0.8), Inches(1.5), Inches(7.5), Inches(0.5), "Kami adalah pengembang perangkat lunak based on subscription — bukan jual putus.", size=14, italic=True, color=GREY, align=PP_ALIGN.LEFT)

# Left: OPEX vs CAPEX two mini cards
left_card = add_shape_rect(s2, Inches(0.8), Inches(2.25), Inches(7.3), Inches(4.5), WHITE, radius=True)
# shadow effect via border? keep clean
# CAPEX box
cap = add_shape_rect(s2, Inches(1.05), Inches(2.5), Inches(3.4), Inches(2.7), RGBColor(0xFD,0xED,0xEC), radius=True)
add_text(s2, Inches(1.2), Inches(2.6), Inches(3.1), Inches(0.35), "❌  MODEL LAMA  •  CAPEX", size=11, bold=True, color=RED_SOFT, align=PP_ALIGN.LEFT)
cap_box = s2.shapes.add_textbox(Inches(1.2), Inches(3.0), Inches(3.1), Inches(2.0))
tf = cap_box.text_frame; tf.word_wrap=True
p=tf.paragraphs[0]; p.text="• Beli server & lisensi mahal di awal"; p.font.size=Pt(12); p.font.color.rgb=GREY_DARK; p.space_after=Pt(6)
add_para(tf,"• Usang saat regulasi berubah",size=12,color=GREY_DARK,space_after=Pt(6))
add_para(tf,"• Wajib tim IT & maintenance sendiri",size=12,color=GREY_DARK,space_after=Pt(6))
add_para(tf,"• Implementasi berbulan-bulan",size=12,color=GREY_DARK,space_after=Pt(2))

opex = add_shape_rect(s2, Inches(4.65), Inches(2.5), Inches(3.4), Inches(2.7), RGBColor(0xE6,0xF4,0xEE), radius=True)
add_text(s2, Inches(4.8), Inches(2.6), Inches(3.1), Inches(0.35), "✓  MODEL ABP  •  OPEX", size=11, bold=True, color=GREEN, align=PP_ALIGN.LEFT)
opex_box = s2.shapes.add_textbox(Inches(4.8), Inches(3.0), Inches(3.1), Inches(2.0))
tf = opex_box.text_frame; tf.word_wrap=True
p=tf.paragraphs[0]; p.text="• Zero modal awal — langsung pakai"; p.font.size=Pt(12); p.font.bold=True; p.font.color.rgb=GREY_DARK; p.space_after=Pt(6)
add_para(tf,"• Biaya rutin terprediksi, pay-as-you-grow",size=12,color=GREY_DARK,space_after=Pt(6))
add_para(tf,"• Update & perawatan gratis otomatis",size=12,color=GREY_DARK,space_after=Pt(6))
add_para(tf,"• Jalan dalam hitungan menit via HP",size=12,color=GREY_DARK,space_after=Pt(2))

# bottom strip inside left card
strip = add_shape_rect(s2, Inches(1.05), Inches(5.45), Inches(6.8), Inches(1.0), RGBColor(0x0F,0x1B,0x2D), radius=True)
add_text(s2, Inches(1.25), Inches(5.55), Inches(6.4), Inches(0.8),
         "Tanpa Modal Awal Besar  •  Hemat  •  Langsung Pakai  —  cocok untuk institusi & bisnis riil.", size=12, bold=True, color=WHITE, align=PP_ALIGN.LEFT)

# Right: Piloting CTA dark card
rc = add_shape_rect(s2, Inches(8.55), Inches(2.25), Inches(3.95), Inches(4.5), NAVY, radius=True)
# gold badge
add_shape_rect(s2, Inches(8.85), Inches(2.55), Inches(1.7), Inches(0.4), GOLD, radius=True)
add_text(s2, Inches(8.85), Inches(2.56), Inches(1.7), Inches(0.38), "✦  PILOTING TERBUKA", size=10, bold=True, color=WHITE, align=PP_ALIGN.CENTER)
add_text(s2, Inches(8.85), Inches(3.1), Inches(3.35), Inches(0.9), "Mari Bangun Software Massal Bersama", size=20, bold=True, color=WHITE, align=PP_ALIGN.LEFT)
add_text(s2, Inches(8.85), Inches(3.95), Inches(3.35), Inches(1.0), "Kami berminat bekerja sama piloting untuk menciptakan perangkat lunak baru yang berpotensi dipakai masal / skala luas.", size=12, color=RGBColor(0xD6,0xD9,0xE0), align=PP_ALIGN.LEFT)
steps = ["1. Co-creation — gali kebutuhan lapangan", "2. Pilot — uji cepat di unit / wilayah", "3. Scale — rilis massal berbasis langganan"]
yy = 5.05
for st in steps:
    add_shape_rect(s2, Inches(8.85), Inches(yy), Inches(3.35), Inches(0.42), RGBColor(0x1C,0x34,0x56), radius=True)
    add_text(s2, Inches(9.0), Inches(yy+0.02), Inches(3.1), Inches(0.38), st, size=11, bold=False, color=WHITE, align=PP_ALIGN.LEFT)
    yy += 0.5
add_text(s2, Inches(8.85), Inches(6.35), Inches(3.35), Inches(0.3), "Diskusi piloting  →  info@abp-prima.id", size=11, bold=True, color=GOLD_LIGHT, align=PP_ALIGN.LEFT)

add_text(s2, Inches(0.8), Inches(6.9), Inches(11.7), Inches(0.3), "Slide 2  •  Konsep SaaS ABP  •  Subscription (OPEX) bukan jual putus (CAPEX)", size=9, color=GREY, align=PP_ALIGN.LEFT)

# ============ SLIDE 3 : DAFTAR SOFTWARE ============
s3 = prs.slides.add_slide(blank)
set_bg(s3, WHITE)
add_shape_rect(s3, Inches(0), Inches(0), Inches(13.33), Inches(0.08), GOLD)
add_text(s3, Inches(0.8), Inches(0.3), Inches(6), Inches(0.35), "—  PORTOFOLIO PRODUK", size=12, bold=True, color=GOLD, align=PP_ALIGN.LEFT)
add_text(s3, Inches(0.8), Inches(0.62), Inches(8), Inches(0.7), "7 Software yang Sudah Dibuat", size=32, bold=True, color=NAVY, align=PP_ALIGN.LEFT)
add_text(s3, Inches(0.8), Inches(1.3), Inches(8), Inches(0.4), "Semua berbasis langganan (SaaS / OPEX) — siap pakai & berpotensi diskala-massalkan.", size=13, italic=True, color=GREY, align=PP_ALIGN.LEFT)
add_text(s3, Inches(10.3), Inches(0.6), Inches(2.2), Inches(0.6), "●  7 PRODUK AKTIF", size=11, bold=True, color=GREEN, align=PP_ALIGN.RIGHT)

products = [
    ("RTnet", "#C7973F", "Administrasi & kas RT/RW transparan, tagihan iuran & surat pengantar digital."),
    ("Eklesia", "#E8862B", "Manajemen gereja & jemaat: keuangan persembahan akuntabel & penjadwalan pelayanan."),
    ("Servio", "#1F9E6D", "Operasional jasa kebersihan & pest control: jadwal teknisi, BAST foto & TTD digital."),
    ("GovPly", "#2C6E63", "Tata naskah dinas digital: disposisi via HP dalam hitungan detik, arsip terekam."),
    ("Rekan", "#2E8BC9", "HRIS & payroll otomatis: absensi GPS geofencing, hitung TER PPh 21 & BPJS."),
    ("Cultiva", "#1BA37A", "Agrobisnis & kebun: kendali COGS per blok, monitoring IoT & rekap panen."),
    ("DigiSale POS", "#D98B2B", "Kasir offline-first untuk retail: tetap jualan tanpa internet & kontrol piutang."),
]

# grid: 4 top, 3 bottom
positions_top = [0.8 + i*3.13 for i in range(4)]
positions_bot = [1.7 + i*3.13 for i in range(3)]
card_w = 2.93
card_h = 2.35

def make_card(x_in, y_in, name, color_hex, desc):
    c = hex_to_rgb(color_hex)
    card = add_shape_rect(s3, Inches(x_in), Inches(y_in), Inches(card_w), Inches(card_h), WHITE, radius=True)
    # border effect: add thin outline by setting line? emulate with top bar
    card.line.color.rgb = GREY_LIGHT
    card.line.width = Pt(1)
    # top color bar
    bar = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x_in), Inches(y_in), Inches(card_w), Inches(0.14))
    bar.fill.solid(); bar.fill.fore_color.rgb = c; bar.line.fill.background()
    # number dot + name
    dot = s3.shapes.add_shape(MSO_SHAPE.OVAL, Inches(x_in+0.18), Inches(y_in+0.35), Inches(0.22), Inches(0.22))
    dot.fill.solid(); dot.fill.fore_color.rgb = c; dot.line.fill.background()
    add_text(s3, Inches(x_in+0.5), Inches(y_in+0.32), Inches(card_w-0.7), Inches(0.35), name, size=16, bold=True, color=NAVY, align=PP_ALIGN.LEFT)
    # desc
    tb = s3.shapes.add_textbox(Inches(x_in+0.18), Inches(y_in+0.8), Inches(card_w-0.36), Inches(1.35))
    tf = tb.text_frame; tf.word_wrap=True
    p=tf.paragraphs[0]; p.text=desc; p.font.size=Pt(11); p.font.color.rgb=GREY_DARK
    try: p.font.name='Calibri'
    except: pass
    # tag SaaS
    add_text(s3, Inches(x_in+0.18), Inches(y_in+card_h-0.45), Inches(1.5), Inches(0.3), "◉ SaaS • OPEX", size=9, bold=True, color=c, align=PP_ALIGN.LEFT)

for i in range(4):
    n,col,d = products[i]
    make_card(positions_top[i], 1.95, n, col, d)
for i in range(3):
    n,col,d = products[4+i]
    make_card(positions_bot[i], 4.5, n, col, d)

# footer
add_text(s3, Inches(0.8), Inches(7.0), Inches(11.7), Inches(0.3), "PT. Anugerah Bakti Prima  •  Marketplace SaaS Pertama di Indonesia  •  info@abp-prima.id", size=9, color=GREY, align=PP_ALIGN.CENTER)

prs.save('ABP_Profil_3_Slide.pptx')
print("Saved ABP_Profil_3_Slide.pptx")
