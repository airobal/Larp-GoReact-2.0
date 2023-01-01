{ pkgs }: {
    deps = [
        pkgs.imagemagick6_light
        pkgs.go-bindata
        pkgs.nodejs-16_x
        pkgs.go
        pkgs.gopls
    ];
}