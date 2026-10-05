$photoList = @(
  @('seasonal-plate','1547592180-85f173990554'),
  @('gathering','1511795409834-ef04bbd61622'),
  @('coffee','1509042239860-f550ce710b93'),
  @('dessert','1488477181946-6428a0291777'),
  @('living-room','1600210492486-724fe5c67fb0'),
  @('kitchen','1556912172-45b7abe8b7e1'),
  @('bathroom-detail','1507652313519-d4e9174996dd'),
  @('modern-home','1564013799919-ab600027ffc6'),
  @('work-tools','1530124566582-a618bc2615dc'),
  @('yoga-class','1544367567-0f2fcb009e0b'),
  @('fitness','1517836357463-d25dfeac3438'),
  @('studio-space','1545205597-3d9d02c29597'),
  @('stretching','1575052814086-f385e2e2ad1b'),
  @('cafe','1442512595331-e89e73853f31'),
  @('restaurant-room','1552566626-52f8b828add9'),
  @('house-exterior','1600585154340-be6161a56a0c'),
  @('home-detail','1600047509807-ba8f99d2cdde'),
  @('dining-space','1616486338812-3dadae4b4ace')
)
foreach ($photoItem in $photoList) {
  $photoUrl = 'https://images.unsplash.com/photo-' + $photoItem[1] + '?fm=webp&fit=crop&w=1400&q=80'
  $photoTarget = Join-Path 'public/images' ($photoItem[0] + '.webp')
  & curl.exe -sSL --fail --max-time 25 $photoUrl -o $photoTarget
  if ($LASTEXITCODE -eq 0) { Write-Output ('Downloaded ' + $photoItem[0]) } else { Write-Output ('FAILED ' + $photoItem[0]) }
}
