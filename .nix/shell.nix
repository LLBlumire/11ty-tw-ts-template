{ pkgs }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    hivemind
  ];
  inputsFrom = [
    (import ./package.nix { inherit pkgs; })
  ];
}
